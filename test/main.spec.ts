import { alpha, beta } from "@/main";
import * as fs from "fs";

let aocInput;
let sampleInput;
beforeAll(() => {
    aocInput = fs.readFileSync('res/input.txt', { encoding: 'utf-8' });
    sampleInput = fs.readFileSync('res/sample.txt', { encoding: 'utf-8' });
});

describe('Part One of Day 5', () => {
    it('should be 5', () => {
        expect(alpha(sampleInput)).toBe(5);
    });

    test('aoc input', () => {
        expect(alpha(aocInput)).toBe(7142);
    });
});

describe('Part Two of Day 5', () => {
    it('should be 12', () => {
        expect(beta(sampleInput)).toBe(12);
    });

    test('aoc input', () => {
        expect(beta(aocInput)).toBe(20012);
    });
});