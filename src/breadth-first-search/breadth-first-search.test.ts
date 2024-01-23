import breadthFirstSearch from "./breadth-first-search";
import type { BinaryTree } from "./breadth-first-search";
import { describe, it, expect } from "bun:test";

describe("breadth-first-search", () => {
    const tree: BinaryTree<number> = {
        value: 1,
        left: { value: 2, left: { value: 4 }, right: { value: 5 } },
        right: { value: 3 }
    }
    it("should find 1 in tree", () => {
        expect(breadthFirstSearch(tree, 1)).toBe(1);
    })
    it("should find 2 in tree", () => {
        expect(breadthFirstSearch(tree, 2)).toBe(2);
    })
    it("should find 3 in tree", () => {
        expect(breadthFirstSearch(tree, 3)).toBe(3);
    })
    it("should find 4 in tree", () => {
        expect(breadthFirstSearch(tree, 4)).toBe(4);
    })
    it("should find 5 in tree", () => {
        expect(breadthFirstSearch(tree, 5)).toBe(5);
    })
    it("should not find 9 in tree", () => {
        expect(breadthFirstSearch(tree, 9)).toBeUndefined();
    })
})