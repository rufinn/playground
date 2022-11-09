import { expect, it } from 'vitest';
import { sort } from './sort';

const TEST_DATA: number[] = [
    66, 19,  33, 70, 13, 93, 98, 97, 0,
    82, 43, 100, 87, 49, 95, 18, 79, 4,
     6, 75,  20, 37, 35, 61, 90, 54, 8,
    91,  7,  47
];

it('should be true', () => {
    expect(sort(TEST_DATA)).toEqual([
        0,  4,   6,  7,  8, 13, 18, 19, 20,
       33, 35,  37, 43, 47, 49, 54, 61, 66,
       70, 75,  79, 82, 87, 90, 91, 93, 95,
       97, 98, 100])
});
