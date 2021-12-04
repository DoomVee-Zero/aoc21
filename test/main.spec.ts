import {alpha, beta, Instruction, processInput} from "@/main";
import * as fs from "fs";

let inlineSample: string = 'forward 5 down 5 forward 8 up 3 down 8 forward 2';
let multilineSample: string = 'forward 5\ndown 5\nforward 8\nup 3\ndown 8\nforward 2';
let aocInput: string;

beforeAll(() => {
    aocInput = fs.readFileSync('res/input.txt', { encoding: 'utf-8' });
});

describe('Input Parsing', function () {
    let expected: Array<Instruction> = [
        { direction: 'forward', length: 5 },
        { direction: 'down', length: 5 },
        { direction: 'forward', length: 8 },
        { direction: 'up', length: 3 },
        { direction: 'down', length: 8 },
        { direction: 'forward', length: 2 },
    ];

    test('parsing function', () => {
        expect(processInput(inlineSample)).toStrictEqual(expected);
        expect(processInput(multilineSample)).toStrictEqual(expected);
    });
});

describe('Day 2 - 1', function () {
    it('should be (15|10)', function () {
        expect(alpha(processInput(multilineSample))).toStrictEqual([15, 10])
    });

    test('aoc input', () => {
        let coordinates = alpha(processInput(aocInput));
        expect(coordinates).toStrictEqual([1991, 911]);
        expect(coordinates[0] * coordinates[1]).toBe(1813801);
    });
});

describe('Day 2 - 2', function () {
    it('should be (15|60)', function () {
        let coordinates = beta(processInput(multilineSample));
        expect(coordinates).toStrictEqual([15,60]);
        expect(coordinates[0] * coordinates[1]).toBe(900);
    });

    test('aoc input', () => {
        let coordinates = beta(processInput(aocInput));
        expect(coordinates).toStrictEqual([1991, 984716]);
        expect(coordinates[0] * coordinates[1]).toBe(1960569556);
    });
});