/*
 * @lc app=leetcode id=965 lang=javascript
 *
 * [965] Univalued Binary Tree
 */

// @lc code=start
/*
Complexity:
T: O(n)
S: O(h)
where h is the height of the tree
*/
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
 * @return {boolean}
 */
var isUnivalTree = function (root, value = root.val) {
  if (!root) return true;
  if (value !== root.val) return false;

  return isUnivalTree(root.left, value) && isUnivalTree(root.right, value);
};
// @lc code=end
