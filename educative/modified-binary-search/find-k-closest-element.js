/*
Statement:
You are given a sorted array of integers, nums, and two integers, target and k.
Your task is to return k number of integers that are close to the target value, target.
The integers in the output array should be in a sorted order.
An integer, nums[i], is considered to be closer to target, as compared to nums[j]
when |nums[i] - target| < |nums[j] - target|.
However, when |nums[i] - target| = |nums[j] - target|, the smaller of the two values is selected.


Test:
[1,2,3,4,5],4,3   :   [1,2,3,4]
[1,2,3,4,5],3,6   :   [3,4,5]
[1,2,3,4,5],2,-1  :   [1,2]


Complexity:
T: O(log n + k)
S: O(1)
*/

function findClosestElements(nums, k, target) {
  let start = 0;
  let end = nums.length - 1;

  if (target < nums[0]) {
    return nums.slice(0, k);
  }
  if (target >= nums[nums.length - 1]) {
    return nums.slice(nums.length - k);
  }

  while (start < end) {
    const mid = Math.floor((start + end) / 2);

    if (nums[mid] < target) {
      start = mid + 1;
    } else {
      end = mid - 1;
    }
  }

  let left = start - 1;
  let right = start + 1;

  while (right - left < k + 1) {
    const leftDiff = left >= 0 ? target - nums[left] : Infinity;
    const rightDiff = right < nums.length ? nums[right] - target : Infinity;

    if (rightDiff < leftDiff) {
      right++;
    } else {
      left--;
    }
  }

  return nums.slice(left + 1, right);
}
