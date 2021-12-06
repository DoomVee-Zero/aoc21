import { alpha, beta } from "@/main";
import * as fs from "fs";

let aocInput;
let sampleInput;
beforeAll(() => {
    aocInput = fs.readFileSync('res/input.txt', { encoding: 'utf-8' });
    sampleInput = fs.readFileSync('res/sample.txt', { encoding: 'utf-8' });
});

describe('Part One of Day 6', () => {
    it('should be 5934', () => {
        expect(alpha(sampleInput)).toBe(5934);
    });

    test('aoc input', () => {
        expect(alpha(aocInput)).toBe(393019);
    });
});

describe('Part Two of Day 6', () => {
    it('should be 26984457539', () => {
        expect(beta(sampleInput)).toBe(26984457539);
    });

    test('aoc input', () => {
        expect(beta(aocInput)).toBe(1757714216975);
    });
});