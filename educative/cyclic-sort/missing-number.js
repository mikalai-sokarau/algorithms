/*
Statement:
Given an array, nums, containing n distinct numbers in the range [0,n],
return the only number in the range that is missing from the array.


Test:
[2,4,5,1,0]    : 3
[]             : null


Complexity:
T: O(n)
S: O(1)
*/

function findMissingNumber(nums) {
  let p = 0;

  while (p < nums.length) {
    const curr = nums[p];

    if (curr >= nums.length || curr === p) {
      p++;
    } else {
      [nums[curr], nums[p]] = [nums[p], nums[curr]];
    }
  }

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] !== i) {
      return i;
    }
  }

  return nums.length;
}

// var missingNumber = function(nums) {
//   let sum = nums.length;
//   for (let i = 0; i < nums.length; i++) {
//     sum += i - nums[i];
//   }

//   return sum;
// };

console.log(findMissingNumber([0, 1, 2, 4]));
