/*
 * @lc app=leetcode id=746 lang=javascript
 *
 * [746] Min Cost Climbing Stairs
 */

// @lc code=start
/*
T: O(N)
S: O(1)
Technique: bottom-up DP
*/
/**
 * @param {number[]} cost
 * @return {number}
 */
var minCostClimbingStairs = function (cost) {
    let [twoBack, oneBack] = cost;

    for (let i = 2; i < cost.length; i++) {
        const current = cost[i] + Math.min(oneBack, twoBack);

        [twoBack, oneBack] = [oneBack, current];
    }

    return Math.min(oneBack, twoBack);
};
/*
T: O(N)
S: O(N)
Technique: top-down DP
*/
// var minCostClimbingStairs = function (cost) {
//     const seen = [];

//     return Math.min(climb(cost, 0, seen), climb(cost, 1, seen));
// };

// var climb = (cost, index, seen) => {
//     if (seen[index]) {
//         return seen[index];
//     }
//     if (index === cost.length - 1 || index === cost.length - 2) {
//         return cost[index];
//     }

//     seen[index] = cost[index] + Math.min(
//         climb(cost, index + 1, seen),
//         climb(cost, index + 2, seen),
//     );

//     return seen[index];
// }
// @lc code=end