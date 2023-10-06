/*
 * @lc app=leetcode id=224 lang=javascript
 *
 * [224] Basic Calculator
 */
/*
Complexity:
T: O(n)
S: O(n)
*/
// @lc code=start
/**
 * @param {string} s
 * @return {number}
 */
var calculate = function (expression) {
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
};

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
// @lc code=end
