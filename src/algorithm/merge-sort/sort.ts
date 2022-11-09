
const mergeSort = (nums: number[]): number[] => {
    /**
     * Divide and conquere until there is nothing to divide.
     */
    if (nums.length < 2) {
        return nums;
    }

    const midIndex = Math.floor(nums.length / 2);

    /**
     * Splice to pick and remove first half array.
     * The remained in nums will be second half.
     */ 
    const leftArray = nums.splice(0, midIndex);
    const rightArray = [...nums];

    /**
     * Merge two sorted arrays.
     */
    return merge(mergeSort(leftArray), mergeSort(rightArray));
};

// Merge the two sorted arrays in ASC order.
const merge = (leftArray: number[], rightArray: number[]): number[] => {
    const result: number[] = [];

    /**
     * Compare LEFT and RIGHT arrays when both are not empty.
     * The smaller one is pushed to result.
     * Shift to pick and remove first array element. (Queue - First In First Out)
     */
    while (leftArray.length && rightArray.length) {
        if(leftArray[0] < rightArray[0]) {
            result.push(leftArray.shift());
        } else {
            result.push(rightArray.shift());
        }
    }

    /**
     * One of the arrays is empty.
     * The remained ones are the larger numbers.
     * Concatenate the rest.
     * Order does not matter because either one is empty.
     */
    return [...result, ...leftArray, ...rightArray];
};

export const sort = (nums: number[]): number[] => {
    return mergeSort(nums);
};

const TEST_DATA = [
    66, 19,  33, 70, 13, 93, 98, 97, 0,
    82, 43, 100, 87, 49, 95, 18, 79, 4,
     6, 75,  20, 37, 35, 61, 90, 54, 8,
    91,  7,  47
];