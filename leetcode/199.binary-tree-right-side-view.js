/*
 * @lc app=leetcode id=199 lang=javascript
 *
 * [199] Binary Tree Right Side View
 */

// @lc code=start
/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[]}
 */
/*
T: 0(N)
S: O(N)
*/
// dfs
var rightSideView = function (root) {
    if (!root) return [];

    const dfs = (node, level, result) => {
        if (result.length < level) {
            result.push(node.val);
        }
        if (node.right) {
            dfs(node.right, level + 1, result);
        }
        if (node.left) {
            dfs(node.left, level + 1, result);
        }

        return result;
    }

    return dfs(root, 1, []);
};
// bfs
// var rightSideView = function(root) {
//     if (!root) return [];

//     const queue = [root];
//     const result = [];
//     let counter = queue.length;

//     while (queue.length) {
//         const current = queue.shift();

//         if (current.left) {
//             queue.push(current.left);
//         }
//         if (current.right) {
//             queue.push(current.right);
//         }

//         counter--;

//         if (counter === 0) {
//             counter = queue.length;
//             result.push(current.val);
//         }
//     }

//     return result;
// };
// @lc code=end

