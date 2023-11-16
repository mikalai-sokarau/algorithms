/*
 * @lc app=leetcode id=671 lang=javascript
 *
 * [671] Second Minimum Node In a Binary Tree
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
/*
Complexity:
T: O(n)
S: O(h) where h is the height of the tree
*/
/**
 * @param {TreeNode} root
 * @return {number}
 */
var findSecondMinimumValue = function (root) {
  let first = Infinity;
  let second = Infinity;

  const dfs = (node) => {
    if (!node) return;

    dfs(node.left);
    dfs(node.right);

    if (node.val === first || node.val === second) {
      return;
    }

    if (node.val < first) {
      second = first;
      first = node.val;
    } else if (node.val < second) {
      second = node.val;
    }
  }

  dfs(root);

  if (second !== Infinity) return second;

  return -1
};
// @lc code=end

