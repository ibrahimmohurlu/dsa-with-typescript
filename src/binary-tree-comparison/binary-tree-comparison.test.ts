import compare, { type BinaryTree } from "./binary-tree-comparison";
import { describe, it, expect } from "bun:test";

describe("compare binary tree", () => {
    const a: BinaryTree<number> = {
        value: 1,
        left: { value: 2, left: { value: 4, left: null, right: null }, right: { value: 5, left: null, right: null } },
        right: { value: 3, left: null, right: null }
    }
    const b: BinaryTree<number> = {
        value: 1,
        left: { value: 2, left: { value: 4, left: null, right: null }, right: { value: 5, left: null, right: null } },
        right: { value: 3, left: null, right: null }
    }
    const c: BinaryTree<number> = {
        value: 1,
        left: { value: 2, left: { value: 4, left: null, right: null }, right: { value: 5, left: null, right: null } },
        right: { value: 3, left: { value: 99, left: null, right: null }, right: null }
    }
    it("should return true a,b identical trees", () => {
        expect(compare(a, b)).toBe(true);
    });
    it("should return false a,c not identical trees", () => {
        expect(compare(a, c)).toBe(false);
    });
})