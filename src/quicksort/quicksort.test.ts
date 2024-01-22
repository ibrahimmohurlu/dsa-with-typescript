import { expect, describe, it } from "bun:test";
import quickSort from "./quicksort";

describe("quicksort", () => {
    const values = [12, 7, 14, 9, 10, 11];
    const sorted = [12, 7, 14, 9, 10, 11].sort((a, b) => a - b);
    it(`should sort [${values.toString()}] to [${sorted.toString()}]`, () => {
        expect(quickSort(values)).toEqual(sorted);
    })

});
