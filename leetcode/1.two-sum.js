/*
 * @lc app=leetcode id=1 lang=javascript
 *
 * [1] Two Sum
 */

// @lc code=start
/*
T: O(N)
S: O(N)
*/
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    const numsMap = {};

    for (let i = 0; i < nums.length; i++) {
        const existedValue = numsMap[nums[i]];

        if (existedValue !== undefined) {
            return [existedValue, i];
        } else {
            numsMap[target - nums[i]] = i;
        }
    }

    return null;
};
// @lc code=end

