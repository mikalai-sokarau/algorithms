/*
Statement:
Given an array of integers, nums, find all possible subsets of nums, including the empty set.


Test:
[1,2,3]   :   [[],[1],[2],[3],[1,2],[1,3],[2,3],[1,2,3]]


Complexity:
T: O(2^n * n)
S: O(1)
*/

function findAllSubsets(nums) {
  const result = [[]];

  for (let i = 1; i < 2 ** nums.length; i++) {
    const subset = [];

    for (let j = 0; j < nums.length; j++) {
      if ((1 << j) & i) {
        subset.push(nums[j]);
      }
    }

    result.push(subset);
  }

  return result;
}
