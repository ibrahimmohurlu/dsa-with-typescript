import { expect, describe, it } from "bun:test";
import bubbleSort from "./bubble-sort.ts";

describe("bubble-sort", () => {

    const values = [9, 3, 7, 420, 4, 69, 42];
    const sorted = [3, 4, 7, 9, 42, 69, 420];
    it(`should sort [${values.toString()}] to be [${sorted.toString()}]`, () => {
        expect(bubbleSort(values)).toEqual(sorted);
    })
});
