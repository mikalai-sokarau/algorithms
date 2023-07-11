/*
 * @lc app=leetcode id=34 lang=javascript
 *
 * [34] Find First and Last Position of Element in Sorted Array
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
/*
T: O(logN)
S: O(1)
*/
var searchRange = function (nums, target) {
    let left = 0;
    let right = nums.length - 1;
    let output = [-1, -1];

    while (left < right) {
        const middle = Math.floor((left + right) / 2);

        if (nums[middle] < target) {
            left = middle + 1;
        } else {
            right = middle;
        }
    }

    if (nums[left] !== target) {
        return output;
    }

    output[0] = left;

    right = nums.length - 1;

    while (left < right) {
        const middle = Math.floor((left + right) / 2) + 1;

        if (nums[middle] === target) {
            left = middle;
        } else {
            right = middle - 1;
        }
    }

    output[1] = right;

    return output;
}
// @lc code=end

