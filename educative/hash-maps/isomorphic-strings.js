/*
Statement:
Given two strings, check whether two strings are isomorphic to each other or not.
Two strings are isomorphic if a fixed mapping exists from the characters of one string
to the characters of the other string.
For example, if there are two instances of the character "a" in the first string,
both these instances should be converted to another character
(which could also remain the same character if "a" is mapped to itself) in the second string.
This converted character should remain the same in both positions of the second string
since there is a fixed mapping from the character "a" in the first string to the converted character
in the second string.

Note: Two different characters cannot map to the same character.
Furthermore, all the instances of a character must be replaced with another character
while protecting the order of characters.



Test:
"aaa", "bbb"   :    true
"abc", "xyz"   :    true
"aba", "bcd"   :    false


Complexity:
T: O(n)
S: O(1)
*/

function isIsomorphic(string1, string2) {
  const map = new Map();
  const seen = new Set();

  for (let i = 0; i < string1.length; i++) {
    if (!map.has(string1[i]) && !seen.has(string2[i])) {
      map.set(string1[i], string2[i]);
      seen.add(string2[i]);
    }

    if (map.get(string1[i]) !== string2[i]) {
      return false;
    }
  }

  return true;
}
