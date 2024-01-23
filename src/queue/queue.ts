class Node<T>{
    public value: T;
    public next: Node<T> | undefined;
    constructor(value: T) {
        this.value = value;
        this.next = undefined
    }
}
export default class Queue<T> {
    private head?: Node<T>;
    private tail?: Node<T>;
    private length: number;
    constructor() {
        this.head = undefined;
        this.tail = undefined;
        this.length = 0;
    }

    enqueue(item: T): void {
        const node = new Node(item);
        this.length++;
        if (!this.tail) {
            // no tail, queue is empty
            this.head = node;
            this.tail = node;
        }
        this.tail.next = node;
        this.tail = node;
    }

    dequeue(): T | undefined {
        if (!this.head) {
            return undefined;
        }
        this.length--;
        // save current head
        const head = this.head;
        // move head to the next
        this.head = this.head.next;
        // return saved head value
        return head.value;
    }
    getLength(): number {
        return this.length;
    }
    isEmpty(): boolean {
        return this.length === 0;
    }

    peek(): T | undefined {
        return this.head?.value;
    }
}