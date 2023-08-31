/*
Statement:
You are required to find an integer t in an array arr of non-distinct integers.
Prior to being passed as input to your search function, arr has been processed as follows:
It has been sorted in non-descending order.
It has been rotated around some pivot k, such that, after rotation, it looks like this:
[nums[k], nums[k+1], ..., nums[n-1], nums[0], nums[1], ..., nums[k-1]].
For example, [10, 30, 40, 42, 42, 47, 78, 90, 901],
rotated around pivot k=5 becomes [47, 78, 90, 901, 10, 30, 40, 42, 42].
Return TRUE if t exists in the rotated, sorted array arr, and FALSE otherwise,
while minimizing the number of operations in the search.


Test:
[7,9,11,16,1,3,4,6],4   :   true
[7,9,11,16,1,3,4,6],5   :   false


Complexity:
T: O(log n)
S: O(1)
*/

function search(arr, t) {
  let left = 0;
  let right = arr.length - 1;

  while (left < right) {
    const mid = Math.floor((left + right) / 2); // 6

    if (arr[mid] === t) {
      return true;
    }

    if (arr[mid] <= arr[right]) {
      // right side is sorted
      if (arr[mid] < t && t <= arr[right]) {
        left = mid + 1;
      } else {
        right = mid - 1;
      }
    } else {
      // left side is sorted
      if (arr[mid] > t && t >= arr[left]) {
        right = mid - 1;
      } else {
        left = mid + 1;
      }
    }
  }

  return arr[left] === t;
}
