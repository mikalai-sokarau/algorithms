/*
 * @lc app=leetcode id=430 lang=javascript
 *
 * [430] Flatten a Multilevel Doubly Linked List
 */

// @lc code=start
/**
 * // Definition for a Node.
 * function Node(val,prev,next,child) {
 *    this.val = val;
 *    this.prev = prev;
 *    this.next = next;
 *    this.child = child;
 * };
 */
/*
T: O(N)
S: O(1)
*/
/**
 * @param {Node} head
 * @return {Node}
 */
var flatten = function (head) {
    let current = head;

    while (current) {
        if (current.child) {
            const next = current.next;
            let tail = current.child;

            while (tail.next) {
                tail = tail.next;
            }

            current.next = current.child;
            current.child.prev = current;
            current.child = null;
            tail.next = next;

            if (next) {
                next.prev = tail;
            }
        }

        current = current.next;
    }

    return head;
};
// @lc code=end

