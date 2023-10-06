/*
Statement:
Given a string containing an arithmetic expression, implement a basic calculator
that evaluates the expression string. The expression string can contain integer numeric values
and should be able to handle the “+” and “-” operators, as well as “()” parentheses.


Test:
(18 - 11 - (27 + 8 - 14) + 37)        :   65
(((1 + 20) - 2) + 3) - 1              :   21
1 + (3 - (4 + (4 - 1)))               :   -3
1 + 2 + 3                             :   6
-2 + -(1 + 0)                         :   -3


Constraints:
Let s be the expression string. We can assume the following constraints:
1 ≤ s.length ≤ 3×10^3
s consists of digits, “+”, “-”, “(”, and “)”.
s represents a valid expression.
“+” is not used as a unary operation (+1 and +(2+3) are invalid).
“-” could be used as a unary operation (−1 and −(2+3) are valid).
There will be no two consecutive operators in the input.
Every number and running calculation will fit in a signed 32-bit integer.

Complexity:
T: O(n)
S: O(n)
*/

function calculator(expression) {
  const stack = [];
  let pointer = expression.length - 1;

  while (pointer >= 0) {
    let curr = expression[pointer];

    if (curr === '(') {
      curr = openParenthesis(stack);
    }

    stack.push(curr);

    pointer--;
  }

  return openParenthesis(stack);
}

const openParenthesis = (stack) => {
  let c = '';
  let expression = '';

  while (c !== ')') {
    expression += c;

    if (!stack.length) break;

    c = stack.pop();
  }

  let sign = 1;
  let sum = 0;
  let num = '';

  for (let i = 0; i < expression.length; i++) {
    c = expression[i];

    if (!isNaN(parseInt(c))) {
      num += c;
    } else if (num.length) {
      sum += num * sign;
      num = '';
      sign = 1;
    }
    if (c === '-') {
      sign *= -1;
    } else if (c === '+') {
      sign = 1;
    }
  }

  return sum + num * sign;
};

console.log(calculator('1-2-4-0-10')); // -15
