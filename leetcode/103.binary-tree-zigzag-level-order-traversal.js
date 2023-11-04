/*
 * @lc app=leetcode id=103 lang=javascript
 *
 * [103] Binary Tree Zigzag Level Order Traversal
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
 * @return {number[][]}
 */
var zigzagLevelOrder = function (root) {
  if (!root) return [];

  const result = [];
  const queue = [root];
  let moveRight = true;

  while (queue.length) {
    const level = [];

    for (let i = queue.length; i > 0; i--) {
      const curr = queue.shift();

      level.push(curr.val);
      curr.left && queue.push(curr.left);
      curr.right && queue.push(curr.right);
    }

    result.push(moveRight ? level : level.reverse());
    moveRight = !moveRight;
  }

  return result;
};
// @lc code=end
