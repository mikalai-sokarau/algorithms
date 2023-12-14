/*
 * @lc app=leetcode id=783 lang=javascript
 *
 * [783] Minimum Distance Between BST Nodes
 */
/*
Complexity:
T: O(n + m)
S: O(m)
where m is the max value in the tree
n is the number of nodes in the tree
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
  let nums = [];

  const dfs = (node) => {
    if (node.left) {
      nums[node.left.val] = node.left.val;
      dfs(node.left);
    }
    if (node.right) {
      nums[node.right.val] = node.right.val;
      dfs(node.right);
    }
  };

  dfs(root);

  nums[root.val] = root.val;
  nums = nums.filter(Number.isInteger);

  for (let i = 0; i < nums.length; i++) {
    if (min === 1) {
      break;
    }
    if (nums[i + 1] >= 0) {
      min = Math.min(min, nums[i + 1] - nums[i]);
    }
  }

  return min;
};
// @lc code=end
