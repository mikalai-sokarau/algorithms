/*
Statement:
Given a string that may consist of opening and closing parentheses,
your task is to check whether or not the string contains valid parenthesization.

The conditions to validate are as follows:
Every opening parenthesis should be closed by the same kind of parenthesis.
Therefore, {)and [(]) strings are invalid.
Every opening parenthesis must be closed in the correct order.
Therefore, )( and ()(() are invalid.


Test:
{(([]))}    :   true
{(([]))}{   :   false


Complexity:
T: O(n)
S: O(n)
*/

function isValid(s) {
  const pairs = {
    '(': ')',
    '[': ']',
    '{': '}',
  };
  const stack = [];

  for (const i of s) {
    if (pairs[i]) {
      stack.push(i);
      continue;
    }

    if (pairs[stack.pop()] !== i) {
      return false;
    }
  }

  return stack.length === 0;
}

console.log(isValid('{(([]))}'));
