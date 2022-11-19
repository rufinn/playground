import Stack from './stack';

describe('Queue Structure', () => {
    it('should return empty array by default', () => {
        const testObj = new Stack();
        expect(testObj.values).toEqual([]);
    });

    it ('should add the element to the tail', () => {
        const testObj = new Stack([1, 2, 3]);

        testObj.add(0);
        expect(testObj.values).toEqual([1, 2, 3, 0]);
    });

    it ('should remove the element from the head', () => {
        const testObj = new Stack([1, 2, 3]);

        testObj.remove();
        expect(testObj.values).toEqual([1, 2]);
    });    
});
