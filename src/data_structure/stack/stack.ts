/**
 * Write a stack structure with javascript.
 * First In, Last Out.
 */
 class Stack {
    values: any[];

    constructor (values: any[] = []) {
        this.values = values;
    }

    add (element: any) {
        this.values.push(element);
    }

    remove() {
        return this.values.pop();
    }
}

export default Stack;