/*
Statement:
Given an array of integers and an integer, k, return the k most frequent elements.


Test:
[1,1,1,1,1,1],1                                                 :   [1]
[3,2,3,1,2,4,5,5,6,7,7,8,2,3,1,1,1,10,11,5,6,2,4,7,8,5,6] ,10   :   [10,11,8,4,7,3,6,2,5,1]


Complexity:
T: O(n log n)
S: O(n + k)
*/

import MinHeap from './min_heap.js';

export function topKFrequent(arr, k) {
  const numbersMap = new Map();
  const minHeap = new MinHeap();
  const result = [];

  for (const n of arr) {
    numbersMap.set(n, (numbersMap.get(n) ?? 0) + 1);
  }

  for (const [num, freq] of numbersMap) {
    if (minHeap.size() < k) {
      minHeap.offer([freq, num]);
      continue;
    }

    if (freq > minHeap.peek()[0]) {
      minHeap.poll();
      minHeap.offer([freq, num]);
    }
  }

  while (minHeap.size()) {
    result.push(minHeap.poll()[1]);
  }

  return result;
}
