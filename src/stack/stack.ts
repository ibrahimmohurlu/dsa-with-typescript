class Node<T>{
    public value: T;
    public next?: Node<T>;
    constructor(value: T) {
        this.value = value;
        this.next = undefined;
    }
}

export default class Stack<T>{
    private head?: Node<T>

    constructor() {
        this.head = undefined;
    }

    push(item: T): void {
        const node = new Node(item);
        if (!this.head) {
            this.head = node;
            return;
        }
        node.next = this.head;
        this.head = node;
    }

    pop(): T | undefined {
        if (!this.head) {
            return undefined;
        }
        const head = this.head;
        this.head = this.head.next;
        return head.value;
    }

    peek(): T | undefined {
        return this.head?.value;
    }
}