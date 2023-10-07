/*
Statement:
You are given a string consisting of lowercase English letters.
Repeatedly remove adjacent duplicate letters, one pair at a time.
Both members of a pair of adjacent duplicate letters need to be removed.


Test:
abbc    :   ac
cabbaba :   cba


Complexity:
T: O(n)
S: O(n)
*/

function removeDuplicates(string) {
  /*
    create a stack to store letters
    start a loop iterating through letters
    check if the current letter equals to the top letter of the stack
      + : remove the top letter from the stack
      - : push the letter to the stack
    return a string created from the letters from the stack
  */
  const stack = [];

  for (const letter of string) {
    const topLetter = stack[stack.length - 1];

    if (topLetter === letter) {
      stack.pop();
    } else {
      stack.push(letter);
    }
  }

  return stack.join('');
}

console.log(removeDuplicates('abbc'));
console.log(removeDuplicates('cabbaba'));
