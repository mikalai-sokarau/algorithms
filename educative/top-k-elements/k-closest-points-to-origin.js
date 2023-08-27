/*
Statement:
Given a list of points on a plane, where the plane is a 2-D array with (x, y) coordinates,
find the k closest points to the origin (0,0).
Note: Here, the distance between two points on a plane is the Euclidean distance (i.e., √(x1 - x2)^2 + (y1 - y2)^2)


Test:
[[1,1],[-2,2],[3,1]], 2    :   [[1,1],[-2,2]]


Complexity:
T: O(n log k)
S: O(k)

export class Point {
  constructor(x, y) {
    this.x = x;
    this.y = y;
  }
}
*/

import { MaxHeap } from './max_heap.js';

const getDistance = (point) => point.x ** 2 + point.y ** 2;

export function kClosest(points, k) {
  const maxHeap = new MaxHeap();
  const closest = [];

  for (let i = 0; i < k; i++) {
    maxHeap.offer([getDistance(points[i]), points[i]]);
  }

  for (let i = k; i < points.length; i++) {
    const currentDistance = getDistance(points[i]);

    if (currentDistance < maxHeap.peek()[0]) {
      maxHeap.poll();
      maxHeap.offer([currentDistance, points[i]]);
    }
  }

  while (maxHeap.size()) {
    closest.push(maxHeap.poll()[1]);
  }

  return closest;
}
