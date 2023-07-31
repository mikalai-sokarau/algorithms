/*
 * @lc app=leetcode id=347 lang=javascript
 *
 * [347] Top K Frequent Elements
 */

// @lc code=start
/*
T: O(n)
S: O(n)
Technique: hashmap
*/
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var topKFrequent = function(nums, k) {
    const map = {};

    for (let num of nums) {
        map[num] = (map[num] ?? 0) + 1;
    }

    const sorted = Object.entries(map)
        .sort((a, b) => b[1] - a[1]);

    sorted.length = k;

    const result = sorted.map((pair) => pair[0]);

    return result;
};
// @lc code=end

