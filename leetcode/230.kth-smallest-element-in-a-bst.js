/*
 * @lc app=leetcode id=230 lang=javascript
 *
 * [230] Kth Smallest Element in a BST
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
 * @param {TreeNode} node
 * @param {number} k
 * @return {number}
 */
/*
T: O(n)
S: O(h) where h is height of the
*/
var kthSmallest = function (root, k) {
  let smallest;

  const dfs = (node) => {
    if (!node || smallest) return;

    dfs(node.left);

    k--;
    if (k === 0) smallest = node.val;

    dfs(node.right);
  };

  dfs(root);

  return smallest;
};
// @lc code=end
