/*
 * @lc app=leetcode id=783 lang=javascript
 *
 * [783] Minimum Distance Between BST Nodes
 */
/*
Complexity:
T: O(n)
S: O(1)
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
var minDiffInBST = function (root) {
  let min = Infinity;
  let prev = Infinity;

  const dfs = (node) => {
    if (!node) return;

    dfs(node.right);

    if (min > prev - node.val) min = prev - node.val;

    prev = node.val;

    dfs(node.left);
  };

  dfs(root);

  return min;
};
// @lc code=end
