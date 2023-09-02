/*
Statement:
Given a string containing digits from 2 to 9 inclusive,
return all possible letter combinations that the number could represent.
Return the answer in any order.


Test:
29  :  [aw, ax, ay, az, bw, bx, by, bz, cw, cx, cy, cz]


Complexity:
T: O(k^n + n)
S: O(n)
where n is a number of digits
k is numbers of letters in the single phoneLetters array (e.g. ['d', 'e', 'f'])
*/

const phoneLetters = {
  1: [],
  2: ['a', 'b', 'c'],
  3: ['d', 'e', 'f'],
  4: ['g', 'h', 'i'],
  5: ['j', 'k', 'l'],
  6: ['m', 'n', 'o'],
  7: ['p', 'q', 'r', 's'],
  8: ['t', 'u', 'v'],
  9: ['w', 'x', 'y', 'z'],
};

function letterCombinations(digits) {
  const splitedDigits = digits.toString().split('');

  return addCombination(splitedDigits, 0, '', []);
}

function addCombination(digits, digitIndex, combination, result) {
  if (combination.length === digits.length) {
    result.push(combination);

    return result;
  }

  for (const letter of phoneLetters[digits[digitIndex]]) {
    addCombination(digits, digitIndex + 1, combination + letter, result);
  }

  return result;
}
