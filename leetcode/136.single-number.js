/*
 * @lc app=leetcode id=136 lang=javascript
 *
 * [136] Single Number
 */

// @lc code=start
/*
T: O(N)
S: O(1)
*/
/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function(nums) {
    let result = 0;
    
    for (let num of nums) {
        result ^= num;
    }
    
    return result;
};

// var singleNumber = function(nums) {
//     return nums.reduce((prev, curr) => prev ^ curr);
// };

// var singleNumber = function(nums) {
//     const map = {};

//     for (let num of nums) {
//         if (map[num]) {
//             delete map[num];
//         } else {
//             map[num] = true;
//         }
//     }

//     return Object.keys(map)[0];
// };
// @lc code=end

