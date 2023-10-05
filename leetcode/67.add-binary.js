/*
 * @lc app=leetcode id=67 lang=javascript
 *
 * [67] Add Binary
 */

/*
Test:
   1111
  +1111
 =11110


Complexity:
T: O(n)
S: O(1)
*/

// @lc code=start
/**
 * @param {string} a
 * @param {string} b
 * @return {string}
 */
var addBinary = function (a, b) {
  /*
    initialize the "inc" variable to store extra 1
    start a loop from the end of the longest string
    sum up last A digit with the last B digit with the "inc" variable
    if the result is 0 or 1 - continue
    if the result is 2 or 3 - set 1 to the "inc" variable
    when the loop is over if "inc" is 1, add it to the beginning of the result
  */
  let inc = 0;
  let result = '';

  for (let i = 0; i < Math.max(a.length, b.length); i++) {
    const numA = Number(a[a.length - i - 1] ?? 0);
    const numB = Number(b[b.length - i - 1] ?? 0);

    switch (numA + numB + inc) {
      case 0:
        result = '0' + result;
        break;
      case 1:
        result = '1' + result;
        inc = 0;
        break;
      case 2:
        result = '0' + result;
        inc = 1;
        break;
      case 3:
        result = '1' + result;
        inc = 1;
        break;
    }
  }

  if (inc === 1) {
    result = '1' + result;
  }

  return result;
};
// @lc code=end
