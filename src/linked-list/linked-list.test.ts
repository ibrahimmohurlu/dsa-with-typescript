import { expect, describe, it } from "bun:test";
import LinkedList from "./linked-list";

describe("linked-list", () => {
    const list = new LinkedList<number>();
    list.append(1);
    list.append(2);
    list.append(-17);
    list.append(99);

    it(`should return 1`, () => {
        expect(list.get(1)).toEqual(1);
    })
    it(`should return undefined`, () => {
        expect(list.get(11)).toBeUndefined()
    })
    it(`should return the length 4`, () => {
        expect(list.length).toEqual(4)
    })
});
