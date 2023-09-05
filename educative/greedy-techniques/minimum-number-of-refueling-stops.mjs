/*
Statement:
You need to find the minimum number of refueling stops that a car needs to make to cover a distance, target.
For simplicity, assume that the car has to travel from west to east in a straight line.
There are various fuel stations on the way that are represented as a 2-D array of stations,
i.e., stations[i] = [d(i), f(i)], where d(i)​ is the distance (in miles) of the i-th gas station
from the starting position, and f(i)​ is the amount of fuel (in liters) that it stores.
Initially, the car starts with k liters of fuel. The car consumes one liter of fuel for every mile traveled.
Upon reaching a gas station, the car can stop and refuel using all the petrol stored at the station.
If it cannot reach the target, the program returns −1.

Note: If the car reaches a station with 0 0 fuel left, it can refuel from that station, and all the fuel from that station
can be transferred to the car. If the car reaches the target with 0 0 fuel left, it is still considered to have arrived.


Test:
15,3,[[2,5],[3,1],[6,3],[12,6]]   :   4


Complexity:
T: O(n log n)
S: O(n)
*/

import { MaxHeap } from '../../data-structures/heap/max-heap.mjs';

export function minRefuelStops(target, startFuel, stations) {
  if (startFuel >= target) {
    return 0;
  }

  const maxHeap = new MaxHeap();
  let currentFuel = startFuel;
  let stops = 0;
  let i = 0;

  while (currentFuel < target) {
    if (i < stations.length && stations[i][0] <= currentFuel) {
      maxHeap.push(stations[i][1]);
      i++;
    } else if (maxHeap.isEmpty() === 0) {
      return -1;
    } else {
      currentFuel += maxHeap.pop();
      stops++;
    }
  }

  return stops;
}

console.log(
  minRefuelStops(120, 10, [
    [10, 60],
    [20, 25],
    [30, 30],
    [60, 40],
  ])
);
