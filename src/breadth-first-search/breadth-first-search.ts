import Queue from "../queue/queue";

// instead of implementing BinaryTree this type will be used with Objects
export type BinaryTree<T> = {
    value: T,
    left?: BinaryTree<T>,
    right?: BinaryTree<T>,
}

export default function breadthFirstSearch<T>(root: BinaryTree<T>, target: T): T | undefined {
    const q = new Queue<BinaryTree<T>>();
    // enqueue the root (head);
    q.enqueue(root);
    while (!q.isEmpty()) {
        const current = q.dequeue();

        if (current?.value === target) {
            return current.value;
        }
        if (current?.left) {
            q.enqueue(current?.left);
        }
        if (current?.right) {
            q.enqueue(current?.right);
        }
    }
    // we traversed the whole tree couldn't find the target return undefined
    return undefined;
}