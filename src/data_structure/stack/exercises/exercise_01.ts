import Stack from '../stack';

export const findMinElement = (nums: Stack): number => {
    let minNumber: number = nums.remove();

    while(nums.values.length > 0) {
        const numToCheck: number = nums.remove();

        if (minNumber > numToCheck) {
            minNumber = numToCheck;
        }
    }
    return minNumber;
};