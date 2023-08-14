import { Heap } from "./heap.mjs";

/*
Statement:
Implement a function findKSmallest(arr,k) that takes an unsorted integer array as input
and returns the “k” smallest elements in the array using a min-heap.


Test: 
[9,4,7,1,-2,6,5], 3     :   [-2,1,4]


Complexity:
T: O(n + klog(n))
S: O(1)
*/

function findKSmallest(arr, k) {
  const heap = new Heap(arr);
  const result = [];

  for (let i = 0; i < k; i++) {
    result.push(heap.poll());
  }

  return result;
}

console.log(findKSmallest([9,4,7,1,-2,6,5], 3));
