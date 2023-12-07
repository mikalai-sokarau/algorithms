/*
 * @lc app=leetcode id=268 lang=javascript
 *
 * [268] Missing Number
 */
/*
Complexity:
T: O(n)
S: O(1)
*/
// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var missingNumber = function (nums) {
  for (let i = 0; i <= nums.length; ) {
    const curr = nums[i];

    if (curr === i || curr === undefined) {
      i++;
      continue;
    }

    [nums[i], nums[curr]] = [nums[curr], nums[i]];
  }

  for (let i = 0; i <= nums.length; i++) {
    if (nums[i] === undefined) {
      return i;
    }
  }
};

// var missingNumber = function (nums) {
//   let sum = 0;
//   const expected = (nums.length * (nums.length + 1)) / 2;

//   for (const n of nums) {
//     sum += n;
//   }

//   return expected - sum;
// };
// @lc code=end
