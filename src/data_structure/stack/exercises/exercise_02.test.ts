/**
 * Sort a stack in ASC order without copying the elements into a array.
 */

import Stack from '../stack';
import { sort } from './exercise_02';

describe('Stack exercise 02', () => {
    it('should sort the stack of values', () => {
        const testObj = new Stack([39, 85, 2, 63, 13]);
        expect(sort(testObj)).toEqual([2, 13, 39, 63, 85]); 
    });
});