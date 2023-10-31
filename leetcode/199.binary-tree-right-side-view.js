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
T: 0(n)
S: O(h) where h is height of the tree
*/
// dfs
var rightSideView = function (root) {
  if (!root) return [];

  function dfs(node, index, result) {
    if (index === result.length) {
      result.push(node.data);
    }

    for (const child of [node.right, node.left]) {
      if (child) {
        dfs(child, index + 1, result);
      }
    }

    return result;
  }

  return dfs(root, 0, []);
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

