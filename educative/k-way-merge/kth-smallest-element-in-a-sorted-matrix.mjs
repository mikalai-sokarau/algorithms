/*
Statement:
Find the k th smallest element in an (n×n) matrix, where each row and column of the matrix is sorted in ascending order.
Although there can be repeating values in the matrix, each element is considered unique and, therefore,
contributes to calculating the k th smallest element.


Test:
Input:
[[1,5, 9],
 [2,8,10],   
 [3,4, 7]], 6   :   7


Complexity:
T: O((r + k) log n)
S: O(r)
where r is number of rows in a matrix, k is a number from input
*/

import { MinHeap } from "../../data-structures/heap/min-heap.mjs";

function kthSmallestNumber(matrix, k) {
  const heap = new MinHeap();
  let smallest = null;
  let numbersChecked = 0;

  // log1+log2+log3+…+logn=log(1*2*3*...*n)=log(n!)
  // As per Stirling’s approximation, O(logn!)≈O(nlogn).
  for (let i = 0; i < matrix.length; i++) {
    heap.offer([matrix[i][0], i, 0]);
  }

  while (numbersChecked < k) {
    const [value, rowIndex, index] = heap.poll();
    const next = index + 1;

    if (next < matrix[rowIndex].length) {
      heap.offer([matrix[rowIndex][next], rowIndex, next]);
    }

    numbersChecked++;
    smallest = value;
  }

  return smallest;
}
