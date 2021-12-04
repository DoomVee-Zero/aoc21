export interface Instruction {
    direction: string;
    length: number;
}

export function beta(instructions: Array<Instruction>) {
    let aim: number = 0;
    let pos: number = 0;
    let depth: number = 0;

    instructions.forEach(inst => {
        if(inst.direction === 'forward') {
            pos += inst.length;
            depth += aim * inst.length;
        } else if(inst.direction === 'down') {
            aim += inst.length;
        } else if(inst.direction === 'up') {
            aim -= inst.length;
        } else {
            throw "Unexpected Direction " + inst.direction;
        }
    });
    return [pos, depth];
}

export function alpha(movements: Array<Instruction>) {
    let dx: number = 0;
    let dy: number = 0;

    movements.forEach(mvmt => {
        if(mvmt.direction === 'forward') {
            dx += mvmt.length;
        } else if(mvmt.direction === 'down') {
            dy += mvmt.length;
        } else if(mvmt.direction === 'up') {
            dy -= mvmt.length;
        } else {
            throw "Unexpected Direction " + mvmt.direction;
        }
    });
    return [dx, dy];
}

export function processInput(input: string) {
    let matches = input.match(/\w+ \d+/g);
    let parsed: Array<Instruction> = [];
    if(matches) {
        matches.forEach(match => {
            let tokenMatch = /(\w+) (\d+)/.exec(match);
            if(tokenMatch) {
                parsed.push({
                    direction: tokenMatch[1],
                    length: parseInt(tokenMatch[2])
                });
            } else {
                throw ("Warning: No Tokens found!");
            }
        });
    } else {
        throw ("Warning: Invalid Input!")
    }
    return parsed;
}