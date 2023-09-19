/*
Statement:
Given an unsorted integer array, nums, return the smallest missing positive integer.
Create an algorithm that runs with an O(n) time complexity and utilizes a constant amount of space.

Note: The smallest missing positive isn’t the first positive number that’s missing
in the range of elements in the input, but the first positive number that’s missing
if we start from 1.


Test:
[2,5,3,6,1,7]   :   4
[0,4,3,2]       :   1
[3,4,-1,2]      :   1
[3,4,2,1]       :   5
[7,8,9,10]      :   1
[1,1]           :   2


Complexity:
T: O(n)
S: O(1)
*/

function smallestMissingPositiveInteger(nums) {
  for (let i = 0; i < nums.length; ) {
    const curr = nums[i];

    if (curr < 0 || curr > nums.length || curr === nums[curr]) {
      i++;
    } else {
      [nums[i], nums[curr]] = [nums[curr], nums[i]];
    }
  }

  for (let i = 1; i < nums.length; i++) {
    if (i !== nums[i]) {
      return i;
    }
  }

  return nums.length;
}

console.log(smallestMissingPositiveInteger([2, 5, 3, 6, 1, 7]));
console.log(smallestMissingPositiveInteger([0, 4, 3, 2]));
console.log(smallestMissingPositiveInteger([3, 4, -1, 2]));
console.log(smallestMissingPositiveInteger([3, 4, 2, 1]));
console.log(smallestMissingPositiveInteger([7, 8, 9, 10]));
console.log(smallestMissingPositiveInteger([1, 1]));
