/*
Statement:
You are given an array, routes, representing bus routes where routes[i] is a bus route
that the i-th bus repeats forever. Every route contains one or more stations.
You have also been given the source station, src, and a destination station, dest.
Return the minimum number of buses someone must take to travel from src to dest,
or return -1 if there is no route.


Test:
Input:
src: 2
dest: 6
routes: [[2,5,7],[4,6,7]]


Solution:
It's needed to check all the buses and all stops even if the path has already been found,
  because there is always can be a better route.
There should be a DS with the correlation between routes and stops (what stops belongs to the route)
and between stops and routes (to which route belong a specific stop).

The src route with 0 (number of stops) is added to the queue.
While the queue is not empty:
  the oldest item is taken from the queue.
  if it is the destination station the number of stops is returned.
  in other case all the stations from the adjacency list that belong to this route added to the queue.
  route is marked as visited, otherwise there will be an infinity loop.


Complexity:
T: O(n * m)
S: O(n * m)
*/

const { Queue } = require('@datastructures-js/queue');

function minimumBuses(routes, src, dest) {
  const stops = {};

  for (let r = 0; r < routes.length; r++) {
    for (const s of routes[r]) {
      if (!stops[s]) {
        stops[s] = [];
      }
      stops[s].push(r);
    }
  }

  /*
    matrix: [
      [1,2],
      [3,1]
    ]
    stops: {
      1: [0,1],
      2: [0],
      3: [1],
    }
  */

  const queue = new Queue();
  const visited = new Set();

  queue.enqueue([src, 0]);

  while (!queue.isEmpty()) {
    const [stop, min] = queue.dequeue();

    if (stop === dest) {
      return min;
    }

    for (const route of stops[stop]) {
      if (visited.has(route)) {
        continue;
      }

      for (const s of routes[route]) {
        queue.enqueue([s, min + 1]);
      }

      visited.add(route);
    }
  }

  return -1;
}

console.log(
  minimumBuses(
    [
      [1, 9, 12, 20, 23, 24, 35, 38],
      [10, 21, 24, 31, 32, 34, 37, 38, 43],
      [10, 19, 28, 37],
      [8],
      [14, 19],
      [11, 17, 23, 31, 41, 43, 44],
      [21, 26, 29, 33],
      [5, 11, 33, 41],
      [4, 5, 8, 9, 24, 44],
    ],
    37,
    28
  )
); // 1
