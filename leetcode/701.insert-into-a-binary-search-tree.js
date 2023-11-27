/*
 * @lc app=leetcode id=701 lang=javascript
 *
 * [701] Insert into a Binary Search Tree
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
T: O(log n)
S: O(h) where h is the height of the tree
*/
/**
 * @param {TreeNode} root
 * @param {number} val
 * @return {TreeNode}
 */
var insertIntoBST = function (root, val) {
  if (!root) return new TreeNode(val);

  const insert = (node) => {
    if (val > node.val) {
      if (node.right) {
        insert(node.right);
      } else {
        node.right = new TreeNode(val);
      }
    } else {
      if (node.left) {
        insert(node.left);
      } else {
        node.left = new TreeNode(val);
      }
    }
  };

  insert(root);

  return root;
};
// @lc code=end
