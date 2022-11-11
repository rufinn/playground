// Get a pivot
// Divide - Less-than-pivot & More-than-pivot
// Recursive till there is nothing to divide
// This example is to sort numbers in ASC order.

const swap = (nums: number[], x: number, y: number): void => {
    const temp = nums[x];
    nums[x] = nums[y];
    nums[y] = temp;
};

const quickSort = (nums, startIndex, endIndex) => {
    /**
     * Get the pivot index for division.
     * pivotIndex = index of last element of left partition.
     * pivotIndex + 1 = index of first element of right partition.
     */
    const pivotIndex = partition(nums, startIndex, endIndex);

    /**
     * If there are only two numbers, just one sorting is needed.
     * Stop sorting.
     */
    if (endIndex - startIndex <= 2) {
        if (nums[startIndex] > nums[endIndex]) {
            swap(nums, startIndex, endIndex);
        }
        return;
    }

    /**
     * There are at least two numbers in the left partition.
     * Sort.
     */
    if (pivotIndex - startIndex > 1) {
        quickSort(nums, startIndex, pivotIndex);
    }

    /**
     * There are at least two numbers in the left partition.
     * Sort.
     */
    if (endIndex - pivotIndex > 1) {
        quickSort(nums, pivotIndex, endIndex);
    }

    return nums;
};
/**
 * Conquere now!
 */
const partition = (nums: number[], startIndex: number, endIndex: number) => {
    /**
     * Get a pivot as a divider.
     */
    const pivot = nums[Math.trunc((startIndex + endIndex) / 2)];
    let leftIndex = startIndex;
    let rightIndex = endIndex;

    /**
     * Compare until the pointers meet.
     * Since we want ASC numbers, left-partition stores smaller numbers.
     */
    while (leftIndex <= rightIndex) {
        /**
         * If left-number is smaller than pivot, it belongs to the correct partition.
         * Skip check the next number.
         * When number is larger than or equal to pivot, stop.
         */
        while(nums[leftIndex] < pivot) {
            leftIndex++;
        }

        /**
         * If right-number is larger than pivot, it belongs to the correct partition.
         * Skip check the next number.
         * When number is smaller than or equal to pivot, stop.
         */
        while(nums[rightIndex] > pivot) {
            rightIndex--;
        }

        /**
         * At this point,
         * right-number =< pivot =< left-number
         * Move the numbers i.e. they are in the correct order.
         * Move the indices for next check.
         */
        if (leftIndex <= rightIndex) {
            swap(nums, leftIndex, rightIndex);
            leftIndex++;
            rightIndex--;
        }
    }

    /**
     * Return the last index of left partition.
     * Last index of left partition = last index of its sub right partition.
     */
    return leftIndex;

};

export const sort = (nums) => {
    return quickSort(nums, 0, nums.length - 1);
};