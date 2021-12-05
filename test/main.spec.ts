import { alpha, beta } from "@/main";
import * as fs from "fs";

let aocInput, sampleInput;
beforeAll(() => {
    sampleInput = fs.readFileSync('res/sample.txt', { encoding: 'utf-8' });
    aocInput = fs.readFileSync('res/input.txt', { encoding: 'utf-8' });
});

describe('Part One of Day 4', () => {
    it('should be 4512', () => {
        expect(alpha(sampleInput)).toBe(4512);
    });
    test('aoc input', () => {
        expect(alpha(aocInput)).toBe(58838);
    });
});

describe('Part Two of Day 4', () => {
    it('should be 1924', () => {
        expect(beta(sampleInput)).toBe(1924);
    });

    test('aoc input', () => {
        expect(beta(aocInput)).toBe(6256);
    });
});