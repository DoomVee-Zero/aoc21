import { alpha, beta } from "@/main";
import * as fs from "fs";

let aocInput;
let sampleInput;
beforeAll(() => {
    aocInput = fs.readFileSync('res/input.txt', { encoding: 'utf-8' });
    sampleInput = fs.readFileSync('res/sample.txt', { encoding: 'utf-8' });
});

describe('Part One of Day X', () => {
    it('should be Y', () => {
        expect(alpha(sampleInput)).toBe(null);
    });
    test('aoc input', () => {
        expect(alpha(aocInput)).toBe(null);
    });
});

describe('Part Two of Day X', () => {
    it('should be Z', () => {
        expect(beta(sampleInput)).toBe(null);
    });

    test('aoc input', () => {
        expect(beta(aocInput)).toBe(null);
    });
});