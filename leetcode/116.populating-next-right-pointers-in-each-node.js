/*
 * @lc app=leetcode id=116 lang=javascript
 *
 * [116] Populating Next Right Pointers in Each Node
 */

// @lc code=start
/**
 * // Definition for a Node.
 * function Node(val, left, right, next) {
 *    this.val = val === undefined ? null : val;
 *    this.left = left === undefined ? null : left;
 *    this.right = right === undefined ? null : right;
 *    this.next = next === undefined ? null : next;
 * };
 */
/*
Complexity:
T: O(n)
S: O(1)
*/

/**
 * @param {Node} root
 * @return {Node}
 */
var connect = function (root) {
  if (!root) return root;

  let mostLeft = root;

  while (mostLeft.left) {
    let curr = mostLeft;

    while (curr) {
      curr.left.next = curr.right;

      if (curr.next) curr.right.next = curr.next.left;

      curr = curr.next;
    }

    mostLeft = mostLeft.left;
  }

  return root;
};
// @lc code=end
