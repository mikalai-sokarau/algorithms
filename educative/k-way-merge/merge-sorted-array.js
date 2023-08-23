/*
Statement:
Given two sorted integer arrays, nums1 and nums2, and the number of data elements in each array, m and n,
implement a function that merges the second array into the first one. You have to modify nums1 in place.
Note: Assume that nums1 has a size equal to m+n meaning it has enough space to hold additional elements from nums2.


Test: 
[1,3,5,7,0,0,0,0], 4, [2,4,6,8], 4        :   [1,2,3,4,5,6,7,8]


Complexity:
T: O(n + m)
S: O(1)
*/

function mergeSorted(nums1, m, nums2, n) {
  let i = m + n - 1;
  let p1 = m - 1;
  let p2 = n - 1;

  while (p2 >= 0) {
    if (nums1[p1] > nums2[p2]) {
      nums1[i] = nums1[p1];
      p1--;
    } else {
      nums1[i] = nums2[p2];
      p2--;
    }
    i--;
  }

  return nums1;
}
