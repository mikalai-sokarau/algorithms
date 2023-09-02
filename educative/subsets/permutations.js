/*
Statement:
Given an input string, return all possible permutations of the string.
Note: The order of permutations does not matter.


Test:
'bad'   :   ['bad','bda','abd','adb','dab','dba']


Complexity:
T: O(n!)
S: O(n)
where n is number of letters
*/

function permuteWord(word) {
  return addPermutation(word.split(''), 0, []);
}

function addPermutation(letters, index, result) {
  if (index === letters.length - 1) {
    result.push(letters.join(''));
  }

  for (let i = index; i < letters.length; i++) {
    const copy = [...letters];

    [copy[index], copy[i]] = [copy[i], copy[index]];

    addPermutation(copy, index + 1, result);
  }

  return result;
}

console.log(permuteWord('bad'));
