/*
 * @lc app=leetcode id=994 lang=javascript
 *
 * [994] Rotting Oranges
 */

// @lc code=start
/**
 * @param {number[][]} grid
 * @return {number}
 */
var orangesRotting = function(grid) {
    let minutes = 0;
    let [fresh, rotten] = getFreshAndRotten(grid);
    let counter = rotten.length;

    while (rotten.length > 0) {
        if (counter === 0) {
            minutes++;
            counter = rotten.length;
        }

        const [row, col] = rotten.shift();
        const rottenThisMinute = rot(grid, row, col, rotten);

        counter--;
        fresh -= rottenThisMinute;
    }

    if(fresh !== 0) {
        return -1;
    }

    return minutes;
};


var ROTTEN = 2;
var FRESH = 1;

var rot = (grid, row, col, rotten) => {
    let rottenCounter = 0;

    if (row - 1 >= 0 && grid[row - 1][col] === FRESH) {
        grid[row - 1][col] = ROTTEN;
        rotten.push([row - 1, col]);
        rottenCounter++;
    }
    if (col + 1 < grid[0].length && grid[row][col + 1] === FRESH) {
        grid[row][col + 1] = ROTTEN;
        rotten.push([row, col + 1]);
        rottenCounter++;
    }
    if (row + 1 < grid.length && grid[row + 1][col] === FRESH) {
        grid[row + 1][col] = ROTTEN;
        rotten.push([row + 1, col]);
        rottenCounter++;
    }
    if (col - 1 >= 0 && grid[row][col - 1] === FRESH) {
        grid[row][col - 1] = ROTTEN;
        rotten.push([row, col - 1]);
        rottenCounter++;
    }

    return rottenCounter;
}

var getFreshAndRotten = (grid) => {
    let fresh = 0;
    const rotten = [];

    for (let row = 0; row < grid.length; row++) {
        for (let col = 0; col < grid[0].length; col++) {
            const current = grid[row][col];

            if (current === ROTTEN) {
                rotten.push([row, col]);
            } else if (current === FRESH) {
                fresh++;
            }
        }
    }

    return [fresh, rotten];
}
// @lc code=end
