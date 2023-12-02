/*
 * @lc app=leetcode id=138 lang=javascript
 *
 * [138] Copy List with Random Pointer
 */

// @lc code=start
/**
 * // Definition for a Node.
 * function Node(val, next, random) {
 *    this.val = val;
 *    this.next = next;
 *    this.random = random;
 * };
 */
/*
Complexity:
T: O(n)
S: O(n)
*/
/**
 * @param {Node} head
 * @return {Node}
 */
var copyRandomList = function (head) {
  const map = new Map();
  let curr = head;

  while (curr) {
    map.set(curr, new Node(curr.val));
    curr = curr.next;
  }

  curr = head;

  while (curr) {
    map.get(curr).next = map.get(curr.next) ?? null;
    map.get(curr).random = map.get(curr.random) ?? null;
    curr = curr.next;
  }

  return map.get(head);
};
// @lc code=end
