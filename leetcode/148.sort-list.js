/*
 * @lc app=leetcode id=148 lang=javascript
 *
 * [148] Sort List
 */
/*
Complexity:
T: O(nlogn)
S: O(n)
*/
// @lc code=start
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var sortList = function (head) {
  const nums = [];
  let curr = head;

  while (curr) {
    nums.push(curr);
    curr = curr.next;
  }

  nums.sort((a, b) => b - a);
  curr = head;

  while (curr) {
    curr.val = nums.pop();
    curr = curr.next;
  }

  return head;
};
// @lc code=end
