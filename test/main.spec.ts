import { alpha, beta } from "@/main";
import * as fs from "fs";

let sample = `00100 11110 10110 10111 10101 01111 00111 11100 10000 11001 00010 01010`;

let aocInput;
beforeAll(() => {
    aocInput = fs.readFileSync('res/input.txt', { encoding: 'utf-8' });
});

describe('Part One of Day 3', () => {
    it('should be (22, 9)', () => {
        expect(alpha(sample)).toStrictEqual([22, 9]);
    });

    test('aoc input', () => {
        expect(alpha(aocInput)).toStrictEqual([3516, 579]);
    });
});

describe('Part Two of Day 3', () => {
    it('should be (23, 10)', () => {
        expect(beta(sample)).toStrictEqual([23, 10]);
    });

    test('aoc input', () => {
        expect(beta(aocInput)).toStrictEqual([3311, 851]);
    });
});