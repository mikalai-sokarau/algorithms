/*
Statement:
Given a matrix, mat, if any element within the matrix is zero, set that row and column to zero.


Test:
[[1,1,1],    :    [[1,0,1],
 [1,0,1],    :     [0,0,0],
 [1,1,1]]    :     [1,0,1]]


Complexity:
T: O(n * m)
S: O(1)
*/

function setMatrixZeros(mat) {
  for (let row = 0; row < mat.length; row++) {
    for (let col = 0; col < mat[0].length; col++) {
      if (mat[row][col] === 0) {
        for (let i = 0; i < mat[0].length; i++) {
          if (mat[row][i] === 0) {
            mat[row][i] = '*';
          } else {
            mat[row][i] = 0;
          }
        }
        break;
      }
    }
  }

  for (let row = 0; row < mat.length; row++) {
    for (let col = 0; col < mat[0].length; col++) {
      if (mat[row][col] === '*') {
        for (let i = 0; i < mat.length; i++) {
          mat[i][col] = 0;
        }
      }
    }
  }

  return mat;
}

console.log(
  setMatrixZeros([
    [1, 1, 1],
    [1, 0, 1],
    [1, 1, 1],
  ])
);
