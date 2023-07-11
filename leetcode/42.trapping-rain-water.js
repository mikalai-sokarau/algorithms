/*
 * @lc app=leetcode id=42 lang=javascript
 *
 * [42] Trapping Rain Water
 */

// @lc code=start
/*
T: O(N)
S: O(1)
formula: current width = min(max left hight, max right hight) - current hight
*/
/**
 * @param {number[]} heights
 * @return {number}
 */
var trap = function(heights) {
    let area = 0;
    let leftP = 0;
    let rightP = heights.length - 1;
    let leftMax = 0;
    let rightMax = 0;

    while (leftP < rightP) {
        leftMax = Math.max(leftMax, heights[leftP]);
        rightMax = Math.max(rightMax, heights[rightP]);

        if (leftMax < rightMax) {
            area += Math.min(leftMax, rightMax) - heights[leftP];
            leftP++;
        } else {
            area += Math.min(leftMax, rightMax) - heights[rightP];
            rightP--;
        }
    }
    
    return area;
};


/*
not optimal
formula: current width = min(max left hight, max right hight) - current hight
time: O(n^2)
space: O(1)
*/
/**
 * @param {number[]} heights
 * @return {number}
 */
// var trap = function(heights) {
//     let area = 0;
//     let pointer = 0;

//     while (pointer < heights.length) {
//         let p1 = pointer - 1;
//         let p2 = pointer + 1;
//         let maxLeft = 0;
//         let maxRight = 0;

//         while (p1 >= 0) {
//             maxLeft = Math.max(maxLeft, heights[p1]);
//             p1--;
//         }

//         while (p2 < heights.length) {
//             maxRight = Math.max(maxRight, heights[p2]);
//             p2++;
//         }
        
//         const currentArea = Math.min(maxLeft, maxRight) - heights[pointer];

//         if (currentArea > 0) {
//             area += currentArea;
//         }

//         pointer++;
//     }
    
//     return area;
// };

// @lc code=end

