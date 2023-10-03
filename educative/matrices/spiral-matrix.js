/*
Statement:
Given an m×n matrix, return an array containing the matrix elements in spiral order, starting from the top-left cell.


Test:
[[1,2,3],
 [4,5,6],     :     [1,2,3,6,9,8,7,4,5,6]
 [7,8,9]]


Complexity:
T: O(m * n)
S: O(1)
*/

function spiralOrder(matrix) {
  /*
    Initialize variables that store rows and cols length and a variable that stores direction.
    Calculate position of the element to be added to the results array by
      decrementing rows and cols until they equal 0.
  */
  let rows = matrix.length;
  let cols = matrix[0].length;
  let row = 0;
  let col = -1;
  let direction = 1;
  const result = [];

  while (rows > 0 && cols > 0) {
    for (let i = 0; i < cols; i++) {
      col += direction;
      result.push(matrix[row][col]);
    }
    rows--;

    for (let i = 0; i < rows; i++) {
      row += direction;
      result.push(matrix[row][col]);
    }
    cols--;

    direction *= -1;
  }

  return result;
}

const directions = [
  [0, 1],
  [1, 0],
  [0, -1],
  [-1, 0],
];

function spiralOrderModifyingInput(matrix) {
  /*
    go to one direction, save all the values found to the result array replacing them with '*'
    when hit the edge of the matrix or '*', change the direction to the next in the array
    when the length of the result array equals to the area of the matrix - return results.
  */
  const result = [];
  let r = 0;
  let c = 0;
  let d = 0;

  while (result.length < matrix.length * matrix[0].length) {
    result.push(matrix[r][c]);

    matrix[r][c] = '*';

    const nextR = r + directions[d][0];
    const nextC = c + directions[d][1];

    if (
      nextR >= 0 &&
      nextC >= 0 &&
      nextR < matrix.length &&
      nextC < matrix[0].length &&
      matrix[nextR][nextC] !== '*'
    ) {
      r = nextR;
      c = nextC;
    } else {
      d++;

      if (d === directions.length) {
        d = 0;
      }

      r += directions[d][0];
      c += directions[d][1];
    }
  }

  return result;
}

console.log(
  spiralOrder([
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
  ])
);
