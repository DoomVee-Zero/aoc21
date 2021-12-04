export function alpha(input: string) {
    let numbers: Array<number> = processInput(input);
    const firstBits = input.split(/[\s\n]+/)[0].split('');
    let bits: Array<number> = firstBits.map((_, i) => {
        return mostCommonBit(numbers, i + 1, firstBits.length);
    });
    let gamma = bits.join('');
    let epsilon = bits.map(inverse => 1 - inverse).join('');
    return [parseInt(gamma, 2), parseInt(epsilon, 2)];
}
/**
 * Determines the most common bit on the bit-position
 * given a number array of integers, which can be represented
 * in a binary string of given length.
 * @param numbers integer array
 * @param bit 1-based position in the binary string
 * @param length binary string length
 */
function mostCommonBit(numbers: Array<number>, bit: number, length: number) {
    return numbers
        .map(num => <number> ((num & (1 << length - bit)) >> length - bit))
        .reduce((acc, n) => acc + n) >= numbers.length / 2 ? 1 : 0;
}
function regenerateMostCommonBits(bitArray: Array<any>, numbers: Array<number>, bitLength: number) {
    return bitArray.map((_, i) => {
        return mostCommonBit(numbers, i + 1, bitLength);
    });
}

export function beta(input: string) {
    let oxygen: Array<number> = processInput(input);
    let co2: Array<number> = [... oxygen];

    const firstBits = input.split(/[\s\n]+/)[0].split('');
    let bitLength = firstBits.length;

    let oxyBits: Array<number> = regenerateMostCommonBits(firstBits, oxygen, bitLength);
    let co2Bits: Array<number> = [... oxyBits];

    // Oxygen Generator Rating
    for(let bit = 1; bit <= oxyBits.length && oxygen.length > 1; bit++) {
        let pow = oxyBits.length - bit;
        let backup = oxygen[oxygen.length - 1];
        oxygen = oxygen.filter(num => {
            return ((num & (1 << pow)) >> pow) === oxyBits[bit-1];
        });
        // If nothing passes the filter, keep last value!
        if(oxygen.length === 0) {
            oxygen.push(backup);
        } else {
            oxyBits = regenerateMostCommonBits(oxyBits, oxygen, bitLength);
        }
    }

    // CO2 Scrubber Rating
    for(let bit = 1; bit <= co2Bits.length && co2.length > 1; bit++) {
        let pow = co2Bits.length - bit;
        let backup = co2[co2.length - 1];
        co2 = co2.filter(num => {
            return ((num & (1 << pow)) >> pow) === (1 - co2Bits[bit-1]);
        });
        // If nothing passes the filter, keep last value!
        if(co2.length === 0) {
            co2.push(backup);
        } else {
            co2Bits = regenerateMostCommonBits(co2Bits, co2, bitLength);
        }
    }

    if(oxygen.length !== 1 || co2.length !== 1) {
        throw "Something went wrong!";
    }
    return [oxygen.shift(), co2.shift()];
}

function processInput(input: string) {
    return input.split(/[\n\s]+/)
        .map((n) => parseInt(n, 2));
}