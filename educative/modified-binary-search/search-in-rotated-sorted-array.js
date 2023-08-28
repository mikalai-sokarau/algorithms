/*
Statement:
Given a sorted integer array, nums, and an integer value, target, the array is rotated by some arbitrary number.
Search and return the index of target in this array. If the target does not exist, return -1.
An original sorted array before rotation is given below:
[1,10,20,47,59,63,75,88,99,107,120,133,155,162,176,188,199,200,210,222]
After rotating this array 6 times, it changes to:
[176,188,199,200,210,222,1,10,20,47,59,63,75,88,99,107,120,133,155,162]


Test:
[176,188,199,200,210,222,1,10,20,47,59,63,75,88,99,107,120,133,155,162], 10    :   7
[176,188,199,200,210,222,1,10,20,47,59,63,75,88,99,107,120,133,155,162], 44    :  -1


left > middle < right   :   left | middle   right   :   5,6,7,1,2,3,4
left < middle > right   :   left   middle | right   :   3,4,5,6,7,1,2
left < middle < right   :   left   middle   right   :   1,2,3,4,5,6,7
left > middle > right   :   left   middle   right   :   7,6,5,4,3,2,1


Complexity:
T: O(log n)
S: O(1)
*/

function binarySearchRotated(nums, target) {
  let left = 0;
  let right = nums.length - 1;

  while (left <= right) {
    const middle = Math.floor((left + right) / 2);

    if (nums[middle] === target) {
      return middle;
    }

    if (nums[left] <= nums[middle]) {
      if (target <= nums[middle] && target >= nums[left]) {
        right = middle - 1;
      } else {
        left = middle + 1;
      }
    } else {
      if (target >= nums[middle] && target <= nums[right]) {
        left = middle + 1;
      } else {
        right = middle - 1;
      }
    }
  }

  return -1;
}
