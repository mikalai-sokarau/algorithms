/*
 * @lc app=leetcode id=92 lang=javascript
 *
 * [92] Reverse Linked List II
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
T: O(N)
S: O(1)
*/
/**
 * @param {ListNode} head
 * @param {number} left
 * @param {number} right
 * @return {ListNode}
 */
var reverseBetween = function(head, left, right) {
    let counter = 1;
    let cur = head;
    let start = head;

    while (counter < left) {
        start = cur;
        cur = cur.next;
        counter++;
    }

    const tail = cur;
    let prev = null;

    while (counter <= right) {
        const next = cur.next;

        cur.next = prev;
        prev = cur;
        cur = next;
        counter++;
    }

    start.next = prev;
    tail.next = cur;

    return left === 1 ? prev : head;
};
// @lc code=end

