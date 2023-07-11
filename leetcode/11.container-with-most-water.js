/*
 * @lc app=leetcode id=11 lang=javascript
 *
 * [11] Container With Most Water
 */

// @lc code=start
/*
T: O(N)
S: O(1)
*/
/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function(heights) {
    let maxArea = 0;

    for (let p1 = 0; p1 < heights.length; p1++) {
        for (let p2 = p1 + 1; p2 < heights.length; p2++) {
            const height = Math.min(heights[p1], heights[p2]);
            const width = p2 - p1;
            const area = height * width;

            maxArea = Math.max(area, maxArea);
        }
    }

    return maxArea;
};
// @lc code=end

