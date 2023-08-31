/*
Statement:
You are given a sorted array of integers, nums, where all integers appear twice except for one.
Your task is to find and return the single integer that appears only once.
The solution should have a time complexity of O(log n) or better and a space complexity of O(1).


Test:
[1,1,2,2,3,3,4,5,5]   :   4


Complexity:
T: O(log n)
S: O(1)
*/

export function singleNonDuplicate(nums) {
  let left = 0;
  let right = nums.length - 1;

  while (left < right) {
    let mid = Math.floor((left + right) / 2);

    if (mid % 2 === 1) {
      mid--;
    }

    if (nums[mid] === nums[mid + 1]) {
      left = mid + 2;
    } else {
      right = mid;
    }
  }

  return nums[left];
}
