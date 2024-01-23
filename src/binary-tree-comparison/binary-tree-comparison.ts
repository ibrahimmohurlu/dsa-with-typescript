// instead of implementing BinaryTree this type will be used with Objects
export type BinaryTree<T> = {
    value: T,
    left: BinaryTree<T> | null,
    right: BinaryTree<T> | null,
}

export default function compare<T extends number | string | boolean>(a: BinaryTree<T> | null, b: BinaryTree<T> | null): boolean {
    // structural check (you are on a leaf node)
    if (a === null && b === null) {
        return true;
    }
    // structural check (one of them is null so structural mismatch)
    if (a === null || b === null) {
        return false;
    }
    // value check
    if (a.value !== b.value) {
        return false;
    }

    return compare(a.left, b.left) && compare(a.right, b.right);
}
