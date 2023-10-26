/*
 * @lc app=leetcode id=234 lang=javascript
 *
 * [234] Palindrome Linked List
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
Complexity:
T: O(n)
S: O(1)
*/
/**
 * @param {ListNode} head
 * @return {boolean}
 */
var isPalindrome = function (head) {
  let slow = head;
  let fast = head;
  let prev = null;

  while (fast && fast.next) {
    fast = fast.next.next;

    const next = slow.next;

    slow.next = prev;
    prev = slow;
    slow = next;
  }

  if (fast && !fast.next) {
    slow = slow.next;
  }

  while (prev) {
    if (prev.val !== slow.val) {
      return false;
    }

    prev = prev.next;
    slow = slow.next;
  }

  return true;
};
// @lc code=end
