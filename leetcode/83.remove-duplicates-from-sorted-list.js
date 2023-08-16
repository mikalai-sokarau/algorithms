/*
 * @lc app=leetcode id=83 lang=javascript
 *
 * [83] Remove Duplicates from Sorted List
 */

// @lc code=start
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/*
T: O(n)
S: O(1)
*/
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var deleteDuplicates = function (head) {
  if (!head || !head.next) {
    return head;
  }

  let prev = head;
  let current = head.next;

  while (current) {
    if (prev.val === current.val) {
      prev.next = current.next;
    } else {
      prev = current;
    }

    current = current.next;
  }

  return head;
};
// @lc code=end
