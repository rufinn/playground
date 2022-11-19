/**
 * Write a queue structure with javascript.
 * First In, First Out.
 */
class Queue {
    values: any[];

    constructor (values: any[] = []) {
        this.values = values;
    }

    add (element: any) {
        this.values.push(element);
    }

    remove() {
        return this.values.shift();
    }
}

export default Queue;