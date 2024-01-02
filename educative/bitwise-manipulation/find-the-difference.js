/*
Statement:
Given two strings, str1 and str2, find the index of the extra character
that is present in only one of the strings.

Note: If multiple instances of the extra character exist,
return the index of the first occurrence of the character in the longer string.


Test:
abcd, acd       : 1
aaaa, aaa       : 0


Solution:



Complexity:
T: O(n)
S: O(1)
*/
/**
 *
 * @param {string} str1
 * @param {string} str2
 */
function extraCharacterIndex(str1, str2) {
  let result = 0;

  for (const char of str1) {
    result ^= char.charCodeAt(0);
  }

  for (const char of str2) {
    result ^= char.charCodeAt(0);
  }

  const longest = str1.length > str2.length ? str1 : str2;

  return longest.indexOf(String.fromCharCode(result));
}

console.log(extraCharacterIndex('abcdg', 'adcb'));
