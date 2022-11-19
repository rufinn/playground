/**
 * Find the minimum element in the queue without creating new array.
 */

import Queue from '../queue';
import { findMinElement } from './exercise_01';

describe('Queue exercuse 01', () => {
    it('find the minimum element in the queue', () => {
        const testObj = new Queue([7, 3, 7, 1]);
        expect(findMinElement(testObj)).toEqual(1);
    });
});