class Node<T> {
    val: T;
    prev: Node<T> | null;
    next: Node<T> | null;
    constructor(val: T, prev?: Node<T>, next?: Node<T>) {
        this.val = val;
        this.prev = prev ?? null;
        this.next = next ?? null;
    }
}
export default class LinkedList<T> {
    private head: Node<T> | null;
    private nodeCount: number;

    constructor() {
        this.head = null;
        this.nodeCount = 0;
    }
    get length(): number {
        return this.nodeCount;
    }

    print(): void {
        if (!this.head) {
            console.log("List is empty");
            return;
        }

        let curr: Node<T> | null = this.head;
        const arr: T[] = []
        while (curr !== null) {
            arr.push(curr.val);
            curr = curr.next;
        }
        console.log(`[${arr.toString()}]`)
    }

    append(item: T): void {
        if (!this.head) {
            this.head = new Node(item);
            this.nodeCount = 1;
            return;
        }

        let curr = this.head;
        while (curr.next !== null) {
            curr = curr.next
        }
        curr.next = new Node(item, curr, undefined);
        this.nodeCount++;
        return;
    }

    prepend(item: T): void {
        const node = new Node(item);
        if (!this.head) {
            this.head = node;
            this.nodeCount = 1;
            return;
        }
        this.head.prev = node;
        node.next = this.head;
        this.head = node;
        this.nodeCount++;
    }

    remove(item: T): T | undefined {
        if (!this.head) {
            return undefined;
        }
        let curr = this.head;
        while (curr.next !== null && curr.val !== item) {
            curr = curr.next;
        }
        if (curr.val !== item) {
            return undefined;
        }

        if (curr.prev && curr.next) {
            // deleting from middle
            const prev = curr.prev;
            const next = curr.next;
            prev.next = next;
            next.prev = prev;
            this.nodeCount--;
            return curr.val;
        } else if (curr.prev && !curr.next) {
            //delete from end
            const prev = curr.prev;
            prev.next = null;
            this.nodeCount--;
            return curr.val;
        } else if (!curr.prev && curr.next) {
            //delete from start
            const next = curr.next;
            this.head = next;
            curr.next = null;
            this.nodeCount--;
            return curr.val;
        }
    }

    get(item: T): T | undefined {
        if (!this.head) {
            return undefined;
        }
        let curr = this.head;
        while (curr.next !== null && curr.val !== item) {
            curr = curr.next;
        }
        if (curr.val !== item) {
            return undefined;
        }
        return curr.val;
    }
}



