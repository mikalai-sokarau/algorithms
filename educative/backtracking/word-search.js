/*
Statement:
Given an m×n 2D grid of characters and word as a string, we need to determine if the word can be constructed
from letters of sequentially adjacent cells.
The cells are considered sequentially adjacent when they are neighbors to each other either
horizontally or vertically.
The function should return TRUE if the word can be constructed and FALSE otherwise.


Test:
[
  ['f', 'q', 'h', 'd'],
  ['e', 'l', 'e', 'l'],
  ['o', 'l', 'f', 'e'],
  ['c', 'b', 'a', 'h'],
]
hello   :   true
baloon  :   false

Complexity:
T: O(n * 3l)
S: O(l)
where n is a number of letters in the grid, l is a number of letters in the word
*/

export function wordSearch(grid, word) {
  for (let r = 0; r < grid.length; r++) {
      for (let c = 0; c < grid[0].length; c++) {
        if (grid[r][c] === word[0]) {
          if (findNextLetter(grid, r, c, word, 0)) {
            return true;
          }
        }
      }
  }

  return false;
}

function findNextLetter(grid, row, col, word, index) {
  if (
    row < 0 ||
    col < 0 ||
    row === grid.length ||
    col === grid[0].length ||
    grid[row][col] !== word[index]
  ) {
    return false;
  } else if (word.length - 1 === index) {
    return true;
  }

  grid[row][col] = '*';

  const isNextLetter =
    // top
    findNextLetter(grid, row - 1, col, word, index + 1) ||
    // right
    findNextLetter(grid, row, col + 1, word, index + 1) ||
    // bottom
    findNextLetter(grid, row + 1, col, word, index + 1) ||
    // left
    findNextLetter(grid, row, col - 1, word, index + 1);

  grid[row][col] = word[index];

  return isNextLetter;
}
