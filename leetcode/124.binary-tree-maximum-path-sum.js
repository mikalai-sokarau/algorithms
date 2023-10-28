/*
 * @lc app=leetcode id=124 lang=javascript
 *
 * [124] Binary Tree Maximum Path Sum
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
 * @return {number}
 */
var maxPathSum = function (root) {
  let max = -Infinity;

  function calculatePath(node) {
    if (!node) return 0;

    const left = Math.max(calculatePath(node.left), 0);
    const right = Math.max(calculatePath(node.right), 0);

    max = Math.max(left + right + node.val, max);

    return Math.max(left, right) + node.val;
  }

  calculatePath(root);

  return max;
};
// @lc code=end
