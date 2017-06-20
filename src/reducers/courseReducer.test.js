import expect from 'expect';
import * as types from '../actions/actionTypes';
import courseReducer from './courseReducer';
import * as actions from '../actions/courseActions';

describe('Course Reducer', () => {
    it('should add course when passed CREATE_COURSES_SUCCESS', () => {
        const initialState = [
            {
                title: 'A'
            }, {
                title: 'B'
            }
        ];

        const newCourse = {
            id: 'clean-code',
            title: 'Clean-Code'
        };

        const action = actions.createCourseSuccess(newCourse);

        const newState = courseReducer(initialState, action);
        const expectedState = [
            ...initialState,
            newCourse
        ];
        expect(newState[2].title).toBe('Clean-Code');
        expect(newState).toEqual(expectedState);
    });
});
