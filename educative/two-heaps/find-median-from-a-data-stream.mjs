/*
Statement:
Implement a data structure that’ll store a dynamically growing list of integers
and provide access to their median in O(1).


Test: 


Complexity:
T: insertNum - O(logn), findMedian - O(1)
S: O(1)
*/

import { Heap } from "../../data-structures/heap/heap.mjs";

class MedianOfStream {
  constructor() {
    this.maxHeap = new Heap(); // biggest from little numbers
    this.minHeap = new Heap(); // smaller from bigger numbers
  }

  insertNum(num) {
    const max = this.maxHeap.peek() * -1;

    if (max >= num) {
      this.maxHeap.offer(num * -1);
    } else {
      this.minHeap.offer(num);
    }

    const maxHeapSize = this.maxHeap.size();
    const minHeapSize = this.minHeap.size();

    // rebalance heaps
    if (maxHeapSize > minHeapSize + 1) {
      this.minHeap.offer(this.maxHeap.poll() * -1);
    } else if (maxHeapSize < minHeapSize) {
      this.maxHeap.offer(this.minHeap.poll() * -1);
    }
  }

  findMedian() {
    const max = this.minHeap.peek();
    const min = this.maxHeap.peek() * -1;

    if (this.minHeap.size() === this.maxHeap.size()) {
      return (max + min) / 2;
    }

    return min;
  }
}
