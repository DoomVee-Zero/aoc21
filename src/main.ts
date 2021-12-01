export function alpha(input: string) {
    return computeIncreases(processInput(input));
}

export function beta(input: string) {
    return computeIncreases(removeNoise(processInput(input)));
}

function computeIncreases(lines: Array<number>): number {
    let inc: number = 0;
    for(let i = 1; i < lines.length; i++) {
        if(lines[i] > lines[i-1]) {
            inc++;
        }
    }
    return inc;
}

function removeNoise(lines: Array<number>) {
    let threeMeasurement = new Array<number>();
    for(let i = 0; i < lines.length - 2; i++) {
        let value = lines[i] + lines[i+1] + lines[i+2];
        threeMeasurement.push(value);
    }
    return threeMeasurement;
}

function processInput(input: string) {
    return input.split(/[\n\s]+/)
        .map((n) => parseInt(n));
}