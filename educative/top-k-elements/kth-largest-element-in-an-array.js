/*
Statement:
Find the k th largest element in an unsorted array.


Test:
[1,2,3,4,5,6], 3        :   4
[-3,-1,0,4,9], 3        :   0


Complexity:
T: O(n log k)
S: O(k)
*/

import MinHeap from '../../data-structures/heap/min-heap.mjs';

function findKthLargest(nums, k) {
  const heap = new MinHeap();

  for (let i = 0; i < k; i++) {
    heap.offer(nums[i]);
  }

  for (let i = k; i < nums.length; i++) {
    if (nums[i] > heap.peek()) {
      heap.poll();
      heap.offer(nums[i]);
    }
  }

  return heap.peek();
}
