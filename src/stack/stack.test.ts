import Stack from "./stack";
import { describe, it, expect } from "bun:test"

describe("stack", () => {
    const stack = new Stack<number>();
    stack.push(99);
    stack.push(88);

    it("peek should return 88", () => {
        expect(stack.peek()).toBe(88);
    })
    it("pop should return 88", () => {
        expect(stack.pop()).toBe(88);
    })
    it("push should not return (77 pushed to the stack)", () => {
        expect(stack.push(77)).toBe(void 0);
    })
    it("pop should return 77", () => {
        expect(stack.pop()).toBe(77);
    })
    it("pop should return 99", () => {
        expect(stack.pop()).toBe(99);
    })
    it("peek should return undefined stack is empty", () => {
        expect(stack.peek()).toBeUndefined();
    })

})