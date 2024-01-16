import Queue from "./queue";
import { describe, it, expect } from "bun:test"

describe("queue", () => {
    const queue = new Queue<number>();
    queue.enqueue(99);
    queue.enqueue(88);

    it("peek should return 99", () => {
        expect(queue.peek()).toBe(99);
    })
    it("dequeue should return 99", () => {
        expect(queue.dequeue()).toBe(99);
    })
    it("peek should return 88", () => {
        expect(queue.peek()).toBe(88);
    })
    it("dequeue should return 88", () => {
        expect(queue.dequeue()).toBe(88);
    })
    it("peek should return undefined queue is empty", () => {
        expect(queue.peek()).toBeUndefined();
    })

})