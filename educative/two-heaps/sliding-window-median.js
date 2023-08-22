/*
Statement:
Given an integer array, nums, and an integer, k, there is a sliding window of size k,
which is moving from the very left to the very right of the array.
We can only see the k numbers in the window. Each time the sliding window moves right by one position.
Given this scenario, return the median of the each window. Answers within 10(−5) of the actual value will be accepted.


Test:
[1,3,-1,2,-2,-3,5,1,5,3], 4   :   [1.5,0.5,-1.5,0.0,-0.5,3.0,4.0]

[1,3,-1,2,-2]
min: [-2,-1,1,2,3]
max: [-3,-2,-1,1,2]
Complexity:
T: O()
S: O()
*/

import { MinHeap } from "../../data-structures/heap/min-heap.mjs";

function medianSlidingWindow(nums, k) {
  const result = [];
  const minHeap = new MinHeap();
  const maxHeap = new MinHeap(); // negative

  for (let i = 0; i < k; i++) {
    maxHeap.offer(nums[i] * -1);
  }

  for (let i = 0; i < Math.floor(k / 2); i++) {
    minHeap.offer(maxHeap.poll() * -1);
  }

  for (let i = k - 1; i < nums.length; i++) {
    let minValue = maxHeap.peek() * -1;
    let maxValue = minHeap.peek();
    const currentValue = nums[k];
    const nextValue = nums[k + 1];

    if (k % 2 === 0) {
      result.push((minValue + maxValue) / 2);
    } else {
      result.push(minValue);
    }

    if (nextValue) {
      if (currentValue * -1 < maxHeap.peek() * -1) {
        maxHeap.offer(nextValue * -1);
        minValue = maxHeap.peek() * -1;
      } else {
        minHeap.offer(nextValue);
        maxValue = minHeap.peek();
      }
    }

    if (currentValue * -1 === minValue) {
      maxHeap.poll();
    } else if (currentValue === maxValue) {
      minHeap.poll();
    }
  }

  return result;
}
