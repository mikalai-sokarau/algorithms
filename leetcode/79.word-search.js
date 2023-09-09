/*
 * @lc app=leetcode id=79 lang=javascript
 *
 * [79] Word Search
 */
/*
T: O(n * k^3)
S: O(k)
where
n is number of cells in the board
k is number of letters in the word
*/

// @lc code=start
/**
 * @param {character[][]} board
 * @param {string} word
 * @return {boolean}
 */
var exist = function (board, word) {
  for (let r = 0; r < board.length; r++) {
    for (let c = 0; c < board[0].length; c++) {
      if (board[r][c] === word[0]) {
        if (searchWord(board, r, c, word, 0)) {
          return true;
        }
      }
    }
  }

  return false;
};

function searchWord(board, row, col, word, index) {
  if (row < 0 || row >= board.length || col < 0 || col >= board[0].length) {
    return false;
  }
  if (board[row][col] !== word[index]) {
    return false;
  }
  if (index === word.length - 1) {
    return true;
  }

  board[row][col] = '*';

  const isFound =
    searchWord(board, row - 1, col, word, index + 1) ||
    searchWord(board, row, col + 1, word, index + 1) ||
    searchWord(board, row + 1, col, word, index + 1) ||
    searchWord(board, row, col - 1, word, index + 1);

  if (!isFound) {
    board[row][col] = word[index];
  }

  return isFound;
}
// @lc code=end

// console.log(
//   exist(
//     [
//       ['A', 'B', 'C', 'E'],
//       ['S', 'F', 'E', 'S'],
//       ['A', 'D', 'E', 'E'],
//     ],
//     'ABCEFSADEESE'
//   )
// );
