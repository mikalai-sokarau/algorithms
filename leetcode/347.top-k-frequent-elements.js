/*
 * @lc app=leetcode id=347 lang=javascript
 *
 * [347] Top K Frequent Elements
 */

// @lc code=start
/*
T: O(n)
S: O(n)
Technique: hashmap + bucket sort
*/
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var topKFrequent = function(nums, k) {
    const map = new Map();
    const bucket = [];
    const result = [];

    for (const num of nums) {
      map.set(num, (map.get(num) ?? 0) + 1);
    }

    for (const [num, freq] of map) {
      if (!bucket[freq]) {
        bucket[freq] = [];
      }
      bucket[freq].push(num);
    }

    for (let i = bucket.length - 1; i >= 0; i--) {
      if (result.length >= k) {
        break;
      }
      if (bucket[i]) {
        result.push(...bucket[i]);
      }
    }

    result.length = k;

    return result;
};
// @lc code=end

