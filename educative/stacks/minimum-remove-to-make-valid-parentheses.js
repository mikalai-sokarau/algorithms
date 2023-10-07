/*
Statement:
Given a string, s, that may have matched and unmatched parentheses,
remove the minimum number of parentheses so that the resulting string represents a valid parenthesization.
For example, the string “a(b)” represents a valid parenthesization while the string “a(b” doesn’t,
since the opening parenthesis doesn’t have any corresponding closing parenthesis.


Test:
a(bc(d)  :   abc(d) or a(bcd)
))abc(d  :   abcd
())()    :   ()()

Complexity:
T: O(n)
S: O(n)
*/

function minRemoveParentheses(s) {
  /*
    Create a stack
    Iterate through the given string
    Push symbols to the stack
    Count a number of open and closed parentheses
    If the closing parenthesis is found before the opening one, do not add it to the stack

    Create a string from the stack
    All the closing parentheses were removed in the previous step, there can be only opened parentheses without a pair
    If the opening parenthesis without a pair is found - do not include it in the result
    Return the result
  */
  const stack = [];
  let counter = 0;
  let result = '';

  for (const token of s) {
    if (token === ')' && counter === 0) {
      continue;
    }
    if (token === ')') {
      counter--;
    }
    if (token === '(') {
      counter++;
    }
    stack.push(token);
  }

  counter = 0;

  while (stack.length) {
    const curr = stack.pop();

    if (curr === '(' && counter === 0) {
      continue;
    }
    if (curr === ')') {
      counter++;
    }
    if (curr === '(') {
      counter--;
    }
    result = curr + result;
  }

  return result;
}

console.log(minRemoveParentheses('())()'));
console.log(minRemoveParentheses('))abc(d'));
