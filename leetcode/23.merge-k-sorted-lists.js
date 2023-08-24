/*
 * @lc app=leetcode id=23 lang=javascript
 *
 * [23] Merge k Sorted Lists
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
T: O(n log k) where n - number of nodes, l - number of lists
S: O(l)
*/
/**
 * @param {ListNode[]} lists
 * @return {ListNode}
 */
var mergeKLists = function (lists) {
  const minQueue = new MinPriorityQueue({ priority: (item) => item.val });

  for (const node of lists) {
    if (node) {
      minQueue.enqueue(node);
    }
  }

  const dummy = new ListNode();
  let current = dummy;

  while (!minQueue.isEmpty()) {
    current.next = minQueue.dequeue().element;
    current = current.next;

    if (current.next) {
      minQueue.enqueue(current.next);
    }
  }

  return dummy.next;
};
// @lc code=end
