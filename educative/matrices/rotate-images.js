/*
Statement:
Given an n×n matrix, rotate the matrix 90 degrees clockwise.
The performed rotation should be in place, i.e., the given matrix is modified directly without allocating another matrix.

Note: The function should only return the modified input matrix.


Test:
[[1,2,3],     :   [[7,4,1],
 [4,5,6],     :    [8,5,2],
 [7,8,9]]     :    [9,6,3]]

[[3]]         :   [[3]]

[[ 3,  1,  1,  7],        :    [[ 10,  4, 15, 3 ],
 [15, 12, 13, 13],        :     [  5, 14, 12, 1 ],
 [ 4, 14, 12,  4],        :     [ 11, 12, 13, 1 ],
 [10,  5, 11, 12]]        :     [ 12,  4, 13, 7 ]]

Complexity:
T: O(n^2) where n is the length of the matrix
S: O(1)
*/

function rotateImage(matrix) {
  const length = matrix.length;

  for (let row = 0; row < length / 2; row++) {
    for (let col = row; col < length - row - 1; col++) {
      // top -> right
      [matrix[row][col], matrix[col][length - row - 1]] = [
        matrix[col][length - row - 1],
        matrix[row][col],
      ];
      // top -> bottom
      [matrix[row][col], matrix[length - row - 1][length - col - 1]] = [
        matrix[length - row - 1][length - col - 1],
        matrix[row][col],
      ];
      // top -> left
      [matrix[row][col], matrix[length - col - 1][row]] = [
        matrix[length - col - 1][row],
        matrix[row][col],
      ];
    }
  }

  return matrix;
}

console.log(
  rotateImage([
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
  ])
);

console.log(
  rotateImage([
    [3, 1, 1, 7],
    [15, 12, 13, 13],
    [4, 14, 12, 4],
    [10, 5, 11, 12],
  ])
);