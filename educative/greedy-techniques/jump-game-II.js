/*
Statement:
In a single-player jump game, the player starts at one end of a series of squares,
with the goal of reaching the last square. At each turn, the player can take up to s steps
towards the last square, where s is the value of the current square.
For example, if the value of the current square is 3, the player can take either 3 steps,
or 2 steps, or 1 step in the direction of the last square.
The player cannot move in the opposite direction, that is, away from the last square.
You’ve been provided with the nums integer array, representing the series of squares.
You’re initially positioned at the first index of the array.
Find the minimum number of jumps needed to reach the last index of the array.
You may assume that you can always reach the last index.


Test:
[2,1,1,1,4]            :   3 (2 -> 1 -> 1 -> 4)
[2,3,1,4,1,2,3,4,5]    :   4 (2 -> 3/1 -> 4 -> 4 -> 5)


Complexity:
T: O(n)
S: O(1)
*/

function jumpGameTwo(nums) {
  let left = 0;
  let right = 1;
  let max = 0;
  let jumps = 0;

  while (right < nums.length) {
    if (nums[right] >= nums[max]) {
      max = right;
    }
    if (left + nums[left] === right || right === nums.length - 1) {
      left = max;
      max = left + 1;
      jumps++;
    }

    right++;
  }

  return jumps;
}
