interface Line {
    sourceX: number;
    sourceY: number;
    targetX: number;
    targetY: number;
}

export function alpha(input: string) {
    let lines = processInput(input);
    let diagram = drawDiagram(lines, true);
    return diagram.flat().filter(n => n > 1).length;
}

export function beta(input: string) {
    let lines = processInput(input);
    let diagram = drawDiagram(lines, false);
    return diagram.flat().filter(n => n > 1).length;
}

function drawDiagram(lines: Array<Line>, disallowDiagonals: boolean) {
    let diagram = initDiagram(lines);
    for(let line of lines) {
        let dx = line.targetX - line.sourceX;
        let dy = line.targetY - line.sourceY;

        let len;
        if(disallowDiagonals) {
            if((dx != 0 && dy != 0)) {
                continue; // skip diagonals
            } else {
                len = Math.abs(dx) + Math.abs(dy);
            }
        } else {
            let horizontal = dx === 0 || dy === 0;
            let diagonal = Math.abs(dx) === Math.abs(dy);

            if(!(horizontal || diagonal)) {
                continue;
            } else {
                len = Math.max(Math.abs(dx), Math.abs(dy));
            }
        }

        let sx = dx / len;
        let sy = dy / len;

        let x = line.sourceX;
        let y = line.sourceY;
        do {
            let cy = Math.floor(y);
            let cx = Math.floor(x);
            diagram[cy][cx]++;
            y += sy;
            x += sx;
        } while(Math.abs(line.targetY - y + sy) > 0.1 || Math.abs(line.targetX - x + sx) > 0.1);
    }
    return diagram;
}

function initDiagram(lines: Array<Line>) {
    let xCoordinates = lines.map(line => line.sourceX)
        .concat(lines.map(line => line.targetX));
    let yCoordinates = lines.map(line => line.sourceY)
        .concat(lines.map(line => line.targetY));

    let maxX = Math.max(... xCoordinates);
    let maxY = Math.max(... yCoordinates);

    let board: number[][] = [];
    for(let y = 0; y <= maxY; y++) {
        board.push([]);
        for(let x = 0; x <= maxX; x++) {
            board[y].push(0);
        }
    }
    return board;
}

function processInput(input: string): Array<Line> {
    let textLines = input.trim().split(/\r?\n/);
    let pairs = textLines.map(line => line.trim().split(' -> '));
    return pairs.map(pair => {
        let source = pair[0].trim().split(',');
        let target = pair[1].trim().split(',');
        return {
            sourceX: parseInt(source[0]),
            sourceY: parseInt(source[1]),
            targetX: parseInt(target[0]),
            targetY: parseInt(target[1])
        };
    });
}