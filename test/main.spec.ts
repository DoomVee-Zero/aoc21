import {alpha, beta } from "@/main";
import * as fs from "fs";

let aocInput;
beforeAll(() => {
    aocInput = fs.readFileSync('res/input.txt', { encoding: 'utf-8' });
})

describe('Part One of Day One', () => {

    it('should be 7', () => {
        let input = `199 200 208 210 200 207 240 269 260 263`;
        expect(alpha(input)).toBe(7);
    });
    test('aoc input', () => {
        expect(alpha(aocInput)).toBe(1696);
    });
})

describe('Part Two of Day One', () => {
    it('should be 5', () => {
        let input = `199 200 208 210 200 207 240 269 260 263`;
        expect(beta(input)).toBe(5);
    });

    test('aoc input', () => {
        expect(beta(aocInput)).toBe(1737);
    });
});