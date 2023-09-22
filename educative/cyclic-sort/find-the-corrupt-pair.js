/*
Statement:
We are given an unsorted array, nums, with n elements and each element is in the range [1,n] inclusive.
The array originally contained all the elements from 1 to n but due to a data error,
one of the numbers is duplicated, which causes another number missing.
Find and return the corrupt pair (missing, duplicated).


Test:
[8,3,1,6,4,2,1,7]   :   [5,1]
[1,1]               :   [1,2]
[1,2,2]             :   [2,3]


Complexity:
T: O(n)
S: O(1)
*/

function findCorruptPair(nums) {
  let i = 0;

  while (i < nums.length) {
    const num = nums[i] - 1;

    if (nums[i] !== nums[num]) {
      [nums[i], nums[num]] = [nums[num], nums[i]];
    } else {
      i++;
    }
  }

  for (i = 0; i < nums.length; i++) {
    if (nums[i] !== i + 1) {
      return [i + 1, nums[i]];
    }
  }
}

console.log(findCorruptPair([8, 3, 1, 6, 4, 2, 1, 7]));
