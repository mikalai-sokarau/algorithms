/*
 * @lc app=leetcode id=897 lang=javascript
 *
 * [897] Increasing Order Search Tree
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
 * @return {TreeNode}
 */
var increasingBST = function (root) {
  let head = null;
  let curr = null;

  const dfs = (node) => {
    if (!node) return;

    dfs(node.left);

    if (!head) {
      head = node;
    } else {
      curr.right = node;
    }
    curr = node;
    curr.left = null;

    dfs(node.right);
  };

  dfs(root);

  return head;
};
// @lc code=end
