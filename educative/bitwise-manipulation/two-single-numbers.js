/*
Statement:
Given a non-empty array arr, in which exactly two elements appear once
and all the other elements appear twice, return the two elements that come only once.


Test:
[1,3,4,2,2,1,3,5]   :   [4,5]


Solution:



Complexity:
T: O(n)
S: O(1)
*/

function twoSingleNumbers(arr) {
  let mask = 0;

  for (const n of arr) {
    mask ^= n;
  }

  mask &= -mask;

  const result = [0, 0];

  for (const n of arr) {
    if (n & mask) {
      result[0] ^= n;
    } else {
      result[1] ^= n;
    }
  }

  return result;
}
