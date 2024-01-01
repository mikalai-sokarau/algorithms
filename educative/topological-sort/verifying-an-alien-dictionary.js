/*
Statement:
You’re given a list of words with lowercase English letters in a different order, written in an alien language.
The order of the alphabet is some permutation of lowercase letters of the English language.
We have to return TRUE if the given list of words is sorted lexicographically in this alien language.


Test:
words: "passengers", "to", "the", "unknown"
order: "ptuhabcdefgijklmnoqrsvwxyz"
output: false

words: "coding", "interview"
order: "abcdiefghjklmnorpqstuvwxyz"
output: true


Complexity:
T: O(n)
S: O(1)

where n is the number of letters in the array with words
since the number of letters in order is limited by 26 symbols, space is constant,
*/

function verifyAlienDictionary(words, order) {
  const dict = {};

  for (let i = 0; i < order.length; i++) {
    dict[order[i]] = i;
  }

  for (let i = 1; i < words.length; i++) {
    const prev = words[i - 1];
    const curr = words[i];
    const length = Math.min(prev.length, curr.length);

    for (let j = 0; j < length; j++) {
      if (prev[j] !== curr[j]) {
        if (dict[prev[j]] > dict[curr[j]]) {
          return false;
        }
        break;
      }
    }

    if (prev.includes(curr) && prev.length > curr.length) {
      return false;
    }
  }

  return true;
}

// console.log(
//   verifyAlienDictionary(
//     ['passengers', 'to', 'the', 'unknown'],
//     'ptuhabcdefgijklmnoqrsvwxyz'
//   )
// );
// console.log(
//   verifyAlienDictionary(['coding', 'interview'], 'abcdiefghjklmnorpqstuvwxyz')
// );
// console.log(
//   verifyAlienDictionary(
//     [
//       'mzosr',
//       'mqov',
//       'xxsvq',
//       'xazv',
//       'xazau',
//       'xaqu',
//       'suvzu',
//       'suvxq',
//       'suam',
//       'suax',
//       'rom',
//       'rwx',
//       'rwv',
//     ],
//     'usmzobcdqxefghiwjklnptvray'
//   )
// );
