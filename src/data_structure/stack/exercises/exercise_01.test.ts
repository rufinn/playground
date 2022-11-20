/**
 * Find the minimum element in the queue without creating new array.
 */

import Stack from '../stack';
import { findMinElement } from './exercise_01';

describe('Stack exercuse 01', () => {
    it('find the minimum element in the queue', () => {
        const testObj = new Stack([7, 3, 7, 1]);
        expect(findMinElement(testObj)).toEqual(1);
    });
});