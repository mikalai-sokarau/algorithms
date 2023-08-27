/*
Statement:
We are given an array of integers, nums, sorted in ascending order, and an integer value, target.
If the target exists in the array, return its index. If the target does not exist, return -1.


Test:
[1,2,3,4,5,6],3     :   2
[1,2,3,4,5,6],8     :   -1


Complexity:
T: O(log n)
S: O(1)
*/

function binarySearch(nums, target) {
  let left = 0;
  let right = nums.length - 1;

  while (left <= right) {
    const p = (left + right) >> 1; // finds a midpoint

    if (nums[p] === target) {
      return p;
    }

    if (nums[p] < target) {
      left = p + 1;
    } else {
      right = p - 1;
    }
  }

  return -1;
}
