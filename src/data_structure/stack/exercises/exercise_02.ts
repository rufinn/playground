import Stack from '../stack';

const swap = (x: number, y: number) => {
    const temp: number = x;
    x = y;
    y = temp;
};

export const sort = (nums: Stack) : number[] => {

    /**
     * Find the minimum element in the array.
     * Push the element in temp stack.
     * Repeat till the stack is empty.
     */

    const tempStack: Stack = new Stack();

    console.log(`tempStack: `, tempStack.values);
    console.log(`stack: `, nums.values);
}