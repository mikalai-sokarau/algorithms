/*
Statement:
Given a string, str, rearrange it so that any two adjacent characters are not the same.
If such a reorganization of the characters is possible, output any possible valid arrangement.
Otherwise, return an empty string.


Test:
aabbbc       :   bababc
aaab         :   ''


Complexity:
T: O(n)
S: O(1) since there is 26 letters in the English alphabet
*/

import { MinHeap } from '../../data-structures/heap/min-heap.mjs';

export function reorganizeString(str) {
  const charMap = {};
  const maxHeap = new MinHeap([], (a, b) => a[0] - b[0]);

  for (const char of str) {
    charMap[char] = (charMap[char] ?? 0) + 1;
  }

  for (const char in charMap) {
    maxHeap.offer([charMap[char] * -1, char]);
  }

  const result = [];
  let prevChar = maxHeap.poll();

  while (maxHeap.size()) {
    const nextChar = maxHeap.poll();
    result.push(prevChar[1]);
    prevChar[0]++;

    if (prevChar[0] !== 0) {
      maxHeap.offer(prevChar);
    }

    prevChar = nextChar;
  }

  result.push(prevChar[1]);

  if (result.length !== str.length) {
    return '';
  }

  return result.join('');
}
