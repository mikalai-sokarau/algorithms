/*
Statement:
Given a 9 x 9 sudoku board, solve the puzzle by completing the empty cells.
The sudoku board is only considered valid if the rules below are satisfied:
Each row must contain digits between 1–9, and there should be no repetition of digits within a row.
Each column must contain digits between 1–9, and there should be no repetition of digits within a column.
The board consists of 9 non-overlapping sub-boxes, each containing 3 rows and 3 columns.
Each of these 3 x 3 sub-boxes must contain digits between 1–9,
and there should be no repetition of digits within a sub-box.


Test:
Valid sudoku:
1 2 3   4 5 6   7 8 9
7 8 9   1 2 3   4 5 6
4 5 6   7 8 9   1 2 3

3 1 2   8 4 5   9 6 7
6 9 7   3 1 2   8 4 5
8 4 5   6 9 7   3 1 2

2 3 1   5 7 4   6 9 8
9 6 8   2 3 1   5 7 4
5 7 4   9 6 8   2 3 1

Complexity:
T: O(9^n)
S: O(n)
where n is a number of empty cells
*/

const NUMBERS = ['1', '2', '3', '4', '5', '6', '7', '8', '9'];

function solveSudoku(board) {
  backtrack(board);

  return board;
}

function backtrack(board) {
  for (let row = 0; row < board.length; row++) {
    for (let col = 0; col < board.length; col++) {
      if (board[row][col] === '.') {
        for (let n = 0; n < NUMBERS.length; n++) {
          if (isBoardStable(board, row, col, NUMBERS[n])) {
            board[row][col] = NUMBERS[n];

            if (backtrack(board)) {
              return true;
            }

            board[row][col] = '.';
          }
        }

        return false;
      }
    }
  }

  return true;
}

function isBoardStable(board, row, col, num) {
  const blockRow = Math.floor(row / 3) * 3;
  const blockCol = Math.floor(col / 3) * 3;

  for (let i = 0; i < board.length; i++) {
    if (
      // checking column
      num === board[row][i] ||
      // checking row
      num === board[i][col] ||
      // checking square block
      num === board[blockRow + Math.floor(i / 3)][blockCol + Math.floor(i % 3)]
    ) {
      return false;
    }
  }

  return true;
}

console.log(
  solveSudoku([
    ['.', '.', '.', '.', '.', '.', '.', '7', '.'],
    ['2', '7', '5', '.', '.', '.', '3', '1', '4'],
    ['.', '.', '.', '.', '2', '7', '.', '5', '.'],
    ['9', '8', '.', '.', '.', '.', '.', '3', '1'],
    ['.', '3', '1', '8', '.', '4', '.', '.', '.'],
    ['.', '.', '.', '1', '.', '.', '8', '.', '5'],
    ['7', '.', '6', '2', '.', '.', '1', '8', '.'],
    ['.', '9', '.', '7', '.', '.', '.', '.', '.'],
    ['4', '1', '.', '.', '.', '5', '.', '.', '7'],
  ])
);
