import expect from 'expect';
import * as actions from './courseActions';
import * as types from './actionTypes';
import thunk from 'redux-thunk';
import nock from 'nock';
import configureMockStore from 'redux-mock-store';

describe('Course Actions', () => {
    describe('createCourseSuccess', () => {
        it('should create as CREATE_COURSES_SUCCESS action', () => {

            const course = {
                id: 'clean-code',
                title: 'Clean-Code'
            };
            const expectedAction = {
                type: types.CREATE_COURSES_SUCCESS,
                course: course
            };

            const action = actions.createCourseSuccess(course);
            expect(action).toEqual(expectedAction);
        });
    });
});

const middleware = [thunk];
const mockStore = configureMockStore(middleware);

describe('Async actions', () => {
    afterEach(() => {
        nock.cleanAll();
    });

    it('should create BEGIN_AJAX_CALL and LOAD_COURSES_SUCCESS when loading courses', (done) => {
        nock('http://localhost:3000').get('/courses').reply(200, {
            body: {
                course: [
                    {
                        id: 1,
                        firstName: 'Subhash',
                        lastName: 'Jha'
                    }
                ]
            }
        });

        const expectedActions = [
            {
                type: types.BEGIN_AJAX_CALL
            }, {
                type: types.LOAD_COURSES_SUCCESS,
                body: {
                    courses: [
                        {
                            id: 1,
                            firstName: 'Subhash',
                            lastName: 'Jha'
                        }
                    ]
                }
            }
        ];

        const store = mockStore({
            courses: []
        }, expectedActions);

        store.dispatch(actions.loadCourses()).then(() => {
            const actActions = store.getActions();
            expect(actActions[0].type).toEqual(types.BEGIN_AJAX_CALL);
            expect(actActions[1].type).toEqual(types.LOAD_COURSES_SUCCESS);
            done();
        });
    });
});
