/*
Statement:
Given an integer array, matchsticks, where matchsticks[i] is the length of the ℎ-ith matchstick.
Use every single matchstick to create a square.
No stick should be broken, although they can be connected, and each matchstick can only be used once.

Return TRUE if we can make this square and FALSE otherwise.


Test:
[2,2,4,4,4]     :   true
[]              :   false
[1,3,4,5,4]     :   false


Complexity:
T: O(4^n)
S: O(n)
*/

function matchstickToSquare(matchsticks) {
  let sum = 0;

  for (const m of matchsticks) {
    sum += m;
  }

  if (sum % 4 !== 0 || matchsticks.length < 4) {
    return false;
  }

  matchsticks.sort((a, b) => b - a);

  return dfs(matchsticks, [0, 0, 0, 0], 0, sum / 4);
}

function dfs(matchsticks, sums, index, target) {
  if (index === matchsticks.length) {
    return true;
  }

  for (let i = 0; i < sums.length; i++) {
    if (sums[i] + matchsticks[index] <= target) {
      sums[i] += matchsticks[index];

      if (dfs(matchsticks, sums, index + 1, target)) {
        return true;
      }

      sums[i] -= matchsticks[index];
    }
  }

  return false;
}

console.log(matchstickToSquare([5, 5, 5, 5, 4, 4, 4, 4, 3, 3, 3, 3])); // 12, true
console.log(matchstickToSquare([5, 5, 5, 5, 16, 4, 4, 4, 4, 4, 3, 3, 3, 3, 4])); // 18, false
