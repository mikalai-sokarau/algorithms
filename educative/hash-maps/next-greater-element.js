/*
Statement:
Given the two distinct integer arrays, nums1 and nums2, where nums1 is a subset of nums2,
find all the next greater elements for nums1 values in the corresponding places of nums2.
In general, the next greater element of an element, x,
in an array is the first greater element present on the right side of x in the same array.
However, in the context of this problem, for each element x in nums1,
find the next greater element present on the right side of x in nums2 and store it in the ans array.
If there is no such element, store − 1 −1 for this number.
The ans array should be of the same length as nums1, and the order of the elements
in the ans array should correspond to the order of the elements in nums1.
Return the ans array after finding the next greater elements.

Note: The input data may or may not be sorted.


Test:
[5,3,4], [2,4,5,3]    :   [-1,-1,-5]
[137,59,92,122,52,131,79,236], [137,59,92,122,52,131,79,236]    :    [236,236,236,236,236,236,236,-1]



Complexity:
T: O(n)
S: O(n)
*/

function nextGreaterElement(nums1, nums2) {
  const map = {};
  const stack = [];

  for (const curr of nums2) {
    while (stack.length && curr > stack[stack.length - 1]) {
      map[stack.pop()] = curr;
    }

    stack.push(curr);
  }

  while (stack.length) {
    map[stack.pop()] = -1;
  }

  const result = [];

  for (const n of nums1) {
    result.push(map[n]);
  }

  return result;
}

// console.log(
//   nextGreaterElement(
//     [137, 59, 92, 122, 52, 131, 79, 236],
//     [137, 59, 92, 122, 52, 131, 79, 236]
//   )
// );
