/*
Statement:
There are n gas stations along a circular route, where the amount of gas at the i-th station is gas[i].
We have a car with an unlimited gas tank, and it costs cost[i] of gas to travel from the i-th station to the next (i+1)th station.
We begin the journey with an empty tank at one of the gas stations.
Find the index of the gas station in the integer array gas such that if we start from that index we may return to the same index
by traversing through all the elements, collecting gas[i] and consuming cost[i].
If it is not possible, return -1. If there exists such index, it is guaranteed to be unique.


Test:
Input:         | Output:
________________________
[1,2,3,4,5],   | 3
[3,4,5,1,2]    |
________________________
[6,0,1,3,2],   | -1
[4,5,2,5,5]    |


Complexity:
T: O(n)
S: O(1)
*/

function gasStationJourney(gas, cost) {
  let start = 0;
  let gasInTank = gas[0] - cost[0];

  for (let i = 1; i < gas.length; i++) {
    if (gasInTank < 0) {
      start = i;
      gasInTank = gas[i] - cost[i];
    } else {
      gasInTank += gas[i] - cost[i];
    }
  }

  for (let i = 0; i < start; i++) {
    gasInTank += gas[i] - cost[i];
  }

  return gasInTank >= 0 ? start : -1;
}

console.log(gasStationJourney([1, 1, 1, 1, 10], [2, 2, 1, 3, 1]));
