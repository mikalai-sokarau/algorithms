/*
Statement:
For a given unsorted array, find the first k missing positive numbers in that array.


Test:
[8,-2,0,5,3,7,1], 3     :   [2,4,6]
[], 3                   :   [1,2,3]
[1,2,3,4],3             :   [5,6,7]
[0,1,2,3,4],3           :   [5,6,7]


Complexity:
T: O(n)
S: O(1)
*/

function firstKMissingNumbers(arr, k) {
  const result = [];
  let i = 0;

  while (i < arr.length) {
    const curr = arr[i];

    if (curr < 0 || curr > arr.length || curr === arr[curr]) {
      i++;
    } else {
      [arr[i], arr[curr]] = [arr[curr], arr[i]];
    }
  }

  for (i = 1; result.length < k; i++) {
    if (arr[i] !== i) {
      result.push(i);
    }
  }

  return result;
}

console.log(firstKMissingNumbers([8, -2, 0, 5, 3, 7, 1], 3));
