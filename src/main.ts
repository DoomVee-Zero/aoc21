export function alpha(input: string) {
    return computeGrowth(input, 80);
}

export function beta(input: string) {
    return computeSmartGrowth(input, 256);
}

function computeGrowth(input: string, days: number) {
    let ages = processInput(input);
    for (let i = 0; i < days; i++) {
        grow(ages);
    }
    return ages.length;
}

function computeSmartGrowth(input: string, days: number) {
    let ages = processInput(input);
    let evol = smartGrow(ages, days);
    return evol.reduce((a, c) => a + c);
}

function grow(ages: Array<number>) {
    let initial = ages.length;
    for(let i = 0; i < initial; i++) {
        if(ages[i] === 0) {
            ages[i] = 6;
            ages.push(8);
        } else {
            ages[i]--;
        }
    }
}

function smartGrow(ages: Array<number>, days: number) {
    let initial = [0, 0, 0, 0, 0, 0, 0, 0, 0];
    ages.forEach(age => initial[age]++);

    for(let i = 0; i < days; i++) {
        let ascendants = initial[0];
        rotLeft(initial, 0, 6)
        initial[6] += initial[7];
        initial[7] = initial[8];
        initial[8] = ascendants;
    }
    return initial;
}

function rotLeft(array: Array<number>, left: number, right: number) {
    let off = array[left];
    for(let i = left + 1; i <= right; i++) {
        array[i-1] = array[i];
    }
    array[right] = off;
}

function processInput(input: string): Array<number> {
    return input.split(',').map(text => parseInt(text));
}