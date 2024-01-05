/*
Statement:
Given the two integer values of a fraction, numerator and denominator,
implement a function that returns the fraction in string format.
If the fractional part repeats, enclose the repeating part in parentheses.


Test:
2,4       |  "0.5"
-10,666   |  "-0.(015)"
10,3      |  "3.(3)"


Complexity:
T: O(nd)
S: O(nd)
where nd is the length of numbers remained after defision numerator with denominator
*/
function fractionToDecimal(numerator, denominator) {
  if (numerator === 0) {
    return '0';
  }

  let result = '';

  if (Math.sign(numerator) !== Math.sign(denominator)) {
    result += '-';
  }

  numerator = Math.abs(numerator);
  denominator = Math.abs(denominator);

  result += Math.floor(numerator / denominator);

  let remainder = numerator % denominator;

  if (!remainder) {
    return result;
  }

  result += '.';

  const map = new Map();

  while (remainder) {
    if (map.has(remainder)) {
      const index = map.get(remainder);

      result = result.slice(0, index) + `(${result.slice(index)})`;
      break;
    }

    map.set(remainder, result.length);

    remainder *= 10;
    result += Math.floor(remainder / denominator);
    remainder %= denominator;
  }

  return result;
}

// console.log(fractionToDecimal(-10, 666));
