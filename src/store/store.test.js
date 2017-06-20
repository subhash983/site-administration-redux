import expect from 'expect';
import * as actions from '../actions/courseActions';
import {createStore} from 'redux';
import rootReducer from '../reducers';
import initialState from '../reducers/initialState';

describe('Store', () => {
    it('Should handle creating courses', () => {
        //arrange
        const store = createStore(rootReducer, initialState);
        const course = {
            title: "Test"
        };

        //act
        const action = actions.createCourseSuccess(course);
        store.dispatch(action);

        //assert
        const actual = store.getState().courses[0];
        expect(actual).toEqual(course);
    });
});
