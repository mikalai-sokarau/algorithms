/*
Statement:
Given a set of n positive integers, find all the possible subsets of integers that sum up to a number k.


Test:
[1,2,3,4], 5            :   [[1,4],[2,3]]
[1,3,5,7,2,8,6,4], 10   :   [[3,7],[4,6],[2,8],[2,3,5],[1,2,7],[1,2,3,4]]


Complexity:
T: O(2^n * n)
S: O(1)
*/

function getKSumSubsets(setOfIntegers, targetSum) {
  const result = [];

  for (let i = 1; i < 2 ** setOfIntegers.length; i++) {
    const subset = [];
    let sum = 0;

    for (let j = 0; j < setOfIntegers.length; j++) {
      if (i & (1 << j)) {
        subset.push(setOfIntegers[j]);
        sum += setOfIntegers[j];
      }
    }

    if (sum === targetSum) {
      result.push(subset);
    }
  }

  return result;
}

console.log(getKSumSubsets([1, 2, 3, 4], 5));
