/*
 * @lc app=leetcode id=37 lang=javascript
 *
 * [37] Sudoku Solver
 */

// @lc code=start
/*
T: O(9!^9)
S: O(9 * 9) -> O(81) -> O(1)
Technique: backtracking 
*/
/**
 * @param {character[][]} board
 * @return {void} Do not return anything, modify board in-place instead.
 */
var solveSudoku = function (board) {
    backtrack(board, 0, 0);
};
var backtrack = (board, r, c) => {
    if (r === board.length) {
        return true;
    }
    if (c === board.length) {
        return backtrack(board, r + 1, 0);
    }
    if (board[r][c] !== '.') {
        return backtrack(board, r, c + 1);
    }

    for (let i = 1; i <= board.length; i++) {
        const num = i.toString();

        if (isValid(board, r, c, num)) {
            board[r][c] = num;

            if (backtrack(board, r, c + 1)) {
                return true;
            }

            board[r][c] = '.';
        }
    }

    return false;
}

var isValid = (board, r, c, num) => {
    const row = r - r % 3; // 3 - size of the box
    const column = c - c % 3;

    for (let i = 0; i < board.length; i++) {
        if (num === board[i][c] || num === board[r][i]) {
            return false;
        }

        if (i < 3) {
            for (let j = 0; j < 3; j++) {
                if (num === board[i + row][j + column]) {
                    return false
                }
            }
        }
    }

    return true;
}
// @lc code=end