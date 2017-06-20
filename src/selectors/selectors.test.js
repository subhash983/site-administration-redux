import expect from 'expect';
import {authorsFormatedForDropdown} from './selectors';

describe('Author Selectors ', () => {
    describe('authorsFormatedForDropdown', () => {
        it('should returned formatted author data', () => {
            const authors = [
                {
                    id: 'test1',
                    firstName: 'John',
                    lastName: 'Paul'
                }, {
                    id: 'test2',
                    firstName: 'Amber',
                    lastName: 'Diaz'
                }
            ];

            const expected = [
                {
                    value: 'test1',
                    text: 'John Paul'
                }, {
                    value: 'test2',
                    text: 'Amber Diaz'
                }
            ];

            expect(authorsFormatedForDropdown(authors)).toEqual(expected);
        });
    });
});
