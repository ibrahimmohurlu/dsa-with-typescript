import { expect, describe, it } from "bun:test";
import linearSearch from "./linear-search.ts";

describe("linear-search", () => {
    const values = [3, 4, 5, 7, 8, 11, 15, 18, 19, 20];
    it(`should found element 5 in [${values.toString()}]`, () => {
        expect(linearSearch(values, 5)).toBe(true);
    })
    it(`should not found element 1 in [${values.toString()}]`, () => {
        expect(linearSearch(values, 1)).toBe(false);
    })
});
