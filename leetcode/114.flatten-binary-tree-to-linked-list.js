/*
 * @lc app=leetcode id=114 lang=javascript
 *
 * [114] Flatten Binary Tree to Linked List
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
S: O(1)
Technique:
Morris Traversal
https://leetcode.com/problems/flatten-binary-tree-to-linked-list/solutions/1207642/js-python-java-c-simple-o-1-space-recursive-solutions-w-explanation/
*/
/**
 * @param {TreeNode} root
 * @return {void} Do not return anything, modify root in-place instead.
 */
var flatten = function (root) {
  let curr = root;

  while (curr) {
    if (curr.left) {
      let last = curr.left;

      while (last.right) {
        last = last.right;
      }

      last.right = curr.right;
      curr.right = curr.left;
      curr.left = null;
    }

    curr = curr.right;
  }

  return root;
};
// @lc code=end
