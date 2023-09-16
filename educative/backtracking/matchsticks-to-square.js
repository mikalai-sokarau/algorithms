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
T: O(n)
S: O(1)
*/

function matchstickToSquare(matchsticks) {
  let sum = 0;

  for (const m of matchsticks) {
    sum += m;
  }

  if (sum % 4 !== 0) {
    return false;
  }

  return buildSquare(matchsticks, matchsticks.length, sum / 4, 0);
}

function buildSquare(matchsticks, available, sideLength, sidesBuilt) {
  if (available === 0 && sidesBuilt === 4) {
    return true;
  }

  let currentSideLength = 0;
  let matchsticksAvailable = available;

  for (let i = 0; i < matchsticks.length; i++) {
    if (matchsticks[i] === '*') {
      continue;
    }

    if (currentSideLength + matchsticks[i] <= sideLength) {
      currentSideLength += matchsticks[i];
      matchsticks[i] = '*';
      matchsticksAvailable--;
    }

    if (currentSideLength === sideLength) {
      return buildSquare(
        matchsticks,
        matchsticksAvailable,
        sideLength,
        sidesBuilt + 1
      );
    }
  }

  return false;
}

console.log(matchstickToSquare([1, 2, 2, 2, 1]));
