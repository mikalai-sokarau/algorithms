/*
Statement:
Given a chessboard of size n×n, determine how many ways n queens can be placed on the board,
such that no two queens attack each other.
A queen can move horizontally, vertically, and diagonally on a chessboard.
One queen can be attacked by another queen if both share the same row, column, or diagonal.


Test:
n = 4     :   2

[               [
  [0,x,0,0],      [0,0,x,0],
  [0,0,0,x],      [x,0,0,0],
  [x,0,0,0],      [0,0,0,x],
  [0,0,x,0],      [0,x,0,0],
]               ]

n = 1     :   1
[
  [x]
]


Complexity:
T: O(n^2 + n^3)
S: O(n^2)
*/

function solveNQueens(n) {
  const board = [];

  for (let r = 0; r < n; r++) {
    board.push([]);
    for (let c = 0; c < n; c++) {
      board[r].push(0);
    }
  }

  return backtrack(board, 0, 0, 0, 0);
}

function backtrack(board, row, col, queensOnBoard, solutions) {
  let s = solutions;

  for (let r = row; r < board.length; r++) {
    for (let c = col; c < board.length; c++) {
      if (board[r][c] === 0) {
        if (!changeBoard(board, r, c, 0)) {
          continue;
        }

        board[r][c] = 'x';
        changeBoard(board, r, c, 1);

        if (queensOnBoard + 1 === board.length) {
          s++;
        } else {
          s += backtrack(board, r + 1, 0, queensOnBoard + 1, 0);
        }

        changeBoard(board, r, c, -1);
        board[r][c] = 0;
      }
    }
  }

  return s;
}

function changeBoard(board, row, col, incrementBy) {
  if (board[row][col] > 0 || board[row][col] === 'x') {
    return false;
  }

  for (let i = 0; i < board.length; i++) {
    // checking vertical and horizontal cells
    if (board[row][i] === 'x' || board[i][col] === 'x') {
      return false;
    } else {
      board[row][i] += incrementBy;
      board[i][col] += incrementBy;
    }

    // checking top-left cells
    if (row - i - 1 >= 0 && col - i - 1 >= 0) {
      if (board[row - i - 1][col - i - 1] === 'x') {
        return false;
      } else {
        board[row - i - 1][col - i - 1] += incrementBy;
      }
    }
    // checking top-right cells
    if (row - i - 1 >= 0 && col + i + 1 < board.length) {
      if (board[row - i - 1][col + i + 1] === 'x') {
        return false;
      } else {
        board[row - i - 1][col + i + 1] += incrementBy;
      }
    }
    // checking bottom-left cells
    if (row + i + 1 < board.length && col - i - 1 >= 0) {
      if (board[row + i + 1][col - i - 1] === 'x') {
        return false;
      } else {
        board[row + i + 1][col - i - 1] += incrementBy;
      }
    }
    // checking bottom-right cells
    if (row + i + 1 < board.length && col + i + 1 < board.length) {
      if (board[row + i + 1][col + i + 1] === 'x') {
        return false;
      } else {
        board[row + i + 1][col + i + 1] += incrementBy;
      }
    }
  }

  return true;
}

console.log(solveNQueens(4));
