/*
 * @lc app=leetcode id=111 lang=javascript
 *
 * [111] Minimum Depth of Binary Tree
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
 * @return {number}
 */
var minDepth = function (root) {
  if (!root) return root;

  const queue = new Queue();
  let depth = 1;

  queue.enqueue(root);

  while (queue.size()) {
    for (let i = queue.size(); i > 0; i--) {
      const node = queue.dequeue();

      if (!node.left && !node.right) {
        return depth;
      }
      if (node.left) {
        queue.enqueue(node.left);
      }
      if (node.right) {
        queue.enqueue(node.right);
      }
    }

    depth++;
  }

  return depth;
};
// @lc code=end

