/*
Statement:
Given an infinite stream of integers (sorted or unsorted), nums,
design a class to find the kth largest element in a stream.

Note: It is the kth largest element in the sorted order, not the k th distinct element.

The class should have the following functions, inputs, and return values:
Init(): It takes an array of integers and an integer k and initializes the class object.
Add(value): It takes one integer value, appends it to the stream, and calls the Return kth largest() function.
Return kth largest(): It returns an integer value that represents the k th largest element in the stream.


Test: 
[1,2,3,4,5,6], 3        :   4
[-3,-1,0,4,9], 3        :   0


Complexity:
constructor
T: O(n log n)
S: O(n)

add
T: O(log k)
S: O(1)

returnKthLargest
T: O(1)
S: O(1)
*/

import { MinHeap } from "../../data-structures/heap/min-heap.mjs";

class KthLargest {
  constructor(k, nums) {
    this.heap = new MinHeap(nums); // O(n log n)

    while (this.heap.size() > k) { // O(n - k log n)
      this.heap.poll();
    }
  }

  add(val) {
    if (val > this.returnKthLargest()) {
      this.heap.poll();
      this.heap.offer(val);
    }
  }

  returnKthLargest() {
    return this.heap.peek();
  }
}
