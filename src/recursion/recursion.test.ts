import { factorial, sum } from "./recursion";
import { describe, it, test, expect } from "bun:test";
describe("recursion", () => {
    it("should sum from 1 to 5 and return 15", () => {
        expect(sum(5)).toBe(15)
    })
    it("should factorial(5) return 120", () => {
        expect(factorial(5)).toBe(120)
    })
})