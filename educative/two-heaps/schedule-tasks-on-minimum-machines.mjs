/*
Statement:
Given a set of n number of tasks, implement a task scheduler method, tasks(),
to run in O(n logn) time that finds the minimum number of machines required to complete these n tasks.


Test: 
[[1,3],[5,8],[11,13]]           :   1
[[1,9],[2,8],[11,13],[6,10]]    :   3
[[1,2],[1,2],[1,2],[1,2]]       :   4

Complexity:
T: O(n log n)
S: O(n)
*/

import { MinHeap } from '../../data-structures/heap/min-heap.mjs';

function tasks(tasksList) {
  if (!tasksList.length) {
    return 0;
  }

  let result = 1;
  const startTimeHeap = new MinHeap();
  const endTimeHeap = new MinHeap();

  for (const [startTime, endTime] of tasksList) {
    startTimeHeap.offer(startTime);
    endTimeHeap.offer(endTime);
  }

  let startedTasks = 0;

  while (startTimeHeap.size() > 0) {
    let startTime = startTimeHeap.poll();
    let endTime = endTimeHeap.peek();

    startedTasks++;

    if (endTime <= startTime) {
      endTimeHeap.poll();
      startedTasks--;
    }

    result = Math.max(result, startedTasks);
  }

  return result;
}
