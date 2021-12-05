type BingoBoard = Array<Array<number>>;

interface Instructions {
    order: number[];
    boards: BingoBoard[];
}

export function alpha(input: string) {
    let instructions = processInput(input);
    let order = instructions.order;
    let boards = instructions.boards;
    let boardIndex = -1;

    let move = order.shift();
    while(boardIndex === -1 && move !== undefined) {
        boards = boards.map(board => markMove(board, move!));
        if(boards.every(board => !hasWon(board))) {
            move = order.shift();
        } else {
            boardIndex = boards.findIndex((board) => hasWon(board));
        }
    }
    return computeScore(boards[boardIndex], move!);
}

export function beta(input: string) {
    let instructions = processInput(input);
    let order = instructions.order;
    let boards = instructions.boards;

    let move = order.shift();
    while(move !== undefined) {
        boards = boards.map(board => markMove(board, move!));
        if(boards.some(board => !hasWon(board))) {
            boards = boards.filter(board => !hasWon(board));
            move = order.shift();
        } else break;
    }

    return computeScore(boards[boards.length - 1], move!);
}

/* Utility */
function computeScore(board: BingoBoard, lastMove: number) {
    return board.map((row) => {
        let unmarked = row.filter(n => n !== -1);
        if (unmarked.length === 0) return 0;
        return unmarked.reduce((a, c) => a + c);
    }).reduce((a, c) => a + c) * lastMove;
}

function markMove(board: BingoBoard, move: number) {
    let index = board.flat().indexOf(move);
    if(index !== -1) {
        let y = Math.floor(index / board.length);
        let x = index % board.length;
        board[y][x] = -1;
    }
    return board;
}

function hasWon(board: BingoBoard): boolean {
    let sum = [0, 0];
    for(let y = 0; y < board.length; y++) {
        for (let x = 0; x < board[y].length; x++) {
            sum[0] += board[y][x];
            sum[1] += board[x][y];
        }
        if(sum[0] == -5 || sum[1] == -5) {
            return true;
        } else {
            sum = [0, 0];
        }
    }
    return false;
}

/* Input Processing*/
function parseBoard(input: string) {
    return input.trim().split(/\r?\n\s*/)
        .map(line => line.trim().split(/ +/)
            .map(num => parseInt(num)));
}

function processInput(input: string): Instructions {
    let data: Array<string> = input.split(/(?:\r?\n){2}/);
    let order = data.shift()!.split(/,/).map(num => parseInt(num));
    let boards = data.map(board => {
        return parseBoard(board);
    });
    return { order, boards };
}