/*
 * @lc app=leetcode id=206 lang=javascript
 *
 * [206] Reverse Linked List
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
optimal
T: O(N)
S: O(1)
*/
var reverseList = function(head) {
    let current = head;
    let prev = null;
    
    while (current) {
        const next = current.next;

        current.next = prev;
        prev = current;
        current = next;
    }

    return prev;
};
/*
not optimal
T: O(N)
S: O(N)
*/
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
// var reverseList = function(head) {
//     let currentNode = head;
//     let currentNodeNew = null;

//     while (currentNode) {
//         const node = new ListNode(currentNode.val, currentNodeNew);

//         currentNodeNew = node;
//         currentNode = currentNode.next;
//     }

//     return currentNodeNew;
// };

// class ListNode {
//     constructor(val, next) {
//         this.val = val;
//         this.next = next;
//     }
// }
// @lc code=end

