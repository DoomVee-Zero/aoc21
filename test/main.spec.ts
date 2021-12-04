import { alpha, beta } from "@/main";
import * as fs from "fs";

let aocInput;
beforeAll(() => {
    aocInput = fs.readFileSync('res/input.txt', { encoding: 'utf-8' });
});

describe('Part One of Day X', () => {
    it('should be Y', () => {
        let input = ``;
        expect(alpha(input)).toBe(null);
    });
    test('aoc input', () => {
        expect(alpha(aocInput)).toBe(null);
    });
});

describe('Part Two of Day X', () => {
    it('should be Z', () => {
        let input = ``;
        expect(beta(input)).toBe(null);
    });

    test('aoc input', () => {
        expect(beta(aocInput)).toBe(null);
    });
});