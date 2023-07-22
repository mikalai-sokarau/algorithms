/*
parent: Math.floor((idx - 1) / 2)
left: (idx + 2) + 1
right: (idx + 2) + 2
*/

const arr = [
    [ 1,  2,  3,  4,  5],
    [ 6,  7,  8,  9, 10],
    [11, 12, 13, 14, 15],
    [16, 17, 18, 19, 20],
];

const seen = [
    [false, false, false, false, false],
    [false, false, false, false, false],
    [false, false, false, false, false],
    [false, false, false, false, false],
];

const dfs = (arr, row, col, seen, values) => {
    if (!seen[row][col]) {
        seen[row][col] = true;
        values.push(arr[row][col]);
    }
    if (row - 1 > 0) {
        dfs(arr, row - 1, col, seen, values);
    }
    if (col + 1 < arr[row].length) {
        dfs(arr, row, col + 1, seen, values);
    }
    if (row + 1 < arr.length) {
        dfs(arr, row + 1, col, seen, values);
    }
    if (col - 1 > 0) {
        dfs(arr, row, col - 1, seen, values);
    }

    return values;
}

console.log(dfs(arr, 0, 0, seen, []))