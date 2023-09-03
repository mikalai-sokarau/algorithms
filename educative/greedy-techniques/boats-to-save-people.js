/*
Statement:
A big ship with numerous passengers is sinking, and there is a need to evacuate these people
with the minimum number of life-saving boats. Each boat can carry, at most, two persons however,
the weight of the people cannot exceed the carrying weight limit of the boat.

We are given an array, people, where people[i] is the weight of the i-th person,
and an infinite number of boats, where each boat can carry a maximum weight, limit.
Each boat carries, at most, two people at the same time.
This is provided that the sum of the weight of these people is under or equal to the weight limit.

You need to return the minimum number of boats to carry all persons in the array.


Test:
[4,2,1,3],5   :   2 ([1,4],[2,3])
[2,3,1,4],4   :   3 ([1,3],[2],[4])


Complexity:
T: O(n + n log n) -> O(n log n)
S: O(n) - depends on implementation [].sort might take O(n) in the worst case
*/
export function rescueBoats(people, limit) {
  let left = 0;
  let right = people.length - 1;
  let boats = 0;

  people.sort((a, b) => a - b);

  while (left <= right) {
    if (people[left] + people[right] <= limit) {
      left++;
    }

    right--;
    boats++;
  }

  return boats;
}
