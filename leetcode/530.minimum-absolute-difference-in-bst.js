/*
 * @lc app=leetcode id=530 lang=javascript
 *
 * [530] Minimum Absolute Difference in BST
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
var getMinimumDifference = function (root) {
  let min = Infinity;

  const dfs = (node) => {
    if (node.left) {
      min = Math.min(min, Math.abs(node.val - dfs(node.left)));
    }
    if (node.right) {
      min = Math.min(min, Math.abs(node.val - dfs(node.right)));
    }

    return node.val;
  };

  dfs(root);

  return min;
};
// @lc code=end
