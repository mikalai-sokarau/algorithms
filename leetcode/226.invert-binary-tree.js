/*
 * @lc app=leetcode id=226 lang=javascript
 *
 * [226] Invert Binary Tree
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
S: O(n)
*/
/**
 * @param {TreeNode} root
 * @return {TreeNode}
 */
var invertTree = function (root) {
  if (!root) {
    return root;
  }

  const queue = new Queue();

  queue.enqueue(root);

  while (!queue.isEmpty()) {
    const node = queue.dequeue();

    if (node.left) {
      queue.enqueue(node.left);
    }
    if (node.right) {
      queue.enqueue(node.right);
    }

    [node.left, node.right] = [node.right, node.left];
  }

  return root;
};
// @lc code=end
