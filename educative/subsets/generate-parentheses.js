/*
Statement:
For a given number, n, generate all combinations of balanced parentheses.


Test:
3   :   ['((()))','(()())','(())()','()(())','()()()']


Complexity:
T: O(2^(n * 2)) -> O(2^(2n)) -> O(4^n)
S: O(2n) -> O(n)
*/

function generateCombinations(n) {
  return generateCombination('', 0, n, []);
}

function generateCombination(current, opened, n, result) {
  if (current.length === n * 2 && opened === 0) {
    result.push(current);
  }

  if (current.length <= n * 2) {
    if (opened + 1 <= n) {
      generateCombination(current + '(', opened + 1, n, result);
    }
    if (opened - 1 >= 0) {
      generateCombination(current + ')', opened - 1, n, result);
    }
  }

  return result;
}
