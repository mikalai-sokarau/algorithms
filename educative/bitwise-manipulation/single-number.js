/*
Statement:
Given an array of integers, where every element appears twice except for one,
find the element that occurs only once.


Test:
[1,4,3,1,2,2,3]     :   4


Complexity:
T: O(n)
S: O(1)
*/

function singleNumber(nums) {
  let result = 0;

  for (const n of nums) {
    result ^= n;
  }

  return result;
}

console.log(singleNumber([1, 4, 3, 1, 2, 2, 3]));
