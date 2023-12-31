/*
Statement:
In this challenge, you are given a list of words written in an alien language,
where the words are sorted lexicographically by the rules of this language.
Surprisingly, the aliens also use English lowercase letters, but possibly in a different order.
Given a list of words written in the alien language, you have to return a string of unique letters
sorted in the lexicographical order of the alien language as derived from the list of words.
If there’s no solution, that is, no valid lexicographical ordering, you can return an empty string.

Note: The lexicographic order of a given language is defined by the order in which the letters of its alphabet appear.
In English, the letter “n” appears before the letter “r” in the alphabet.
As a result, in two words that are the same up to the point where one features “n” and the other features “r,”
the former is considered the lexicographically smaller word of the two.
For this reason, “ban” is considered lexicographically smaller than “bar.”

Similarly, if an input contains words followed by their prefix, such as “educated” and then “educate,”
these cases will never result in a valid alphabet because in a valid alphabet, prefixes are always first.


Complexity:
T: O(c)
S: O(c)

where c is the number of characters in the input array
*/

function alienOrder(words) {
  const adjList = {};
  const inDegree = {};

  for (const word of words) {
    for (const char of word) {
      if (!adjList[char]) {
        adjList[char] = new Set();
      }
    }
  }

  for (let i = 1; i < words.length; i++) {
    const prev = words[i - 1];
    const curr = words[i];
    const length = Math.min(prev.length, curr.length);

    for (let j = 0; j < length; j++) {
      if (prev[j] !== curr[j]) {
        adjList[prev[j]].add(curr[j]);
        inDegree[curr[j]] = (inDegree[curr[j]] ?? 0) + 1;

        break;
      } else if (j + 1 === length && prev.length > curr.length) {
        return '';
      }
    }
  }

  let result = '';
  const queue = [];

  for (const key of Object.keys(adjList)) {
    if (!inDegree[key]) {
      queue.push(key);
    }
  }

  while (queue.length) {
    const curr = queue.shift();

    result += curr;

    for (const neighbor of adjList[curr]) {
      inDegree[neighbor]--;

      if (inDegree[neighbor] === 0) {
        queue.push(neighbor);
      }
    }
  }

  if (result.length !== Object.keys(adjList).length) {
    return '';
  }

  return result;
}

// alienOrder(['o','l','m','s']); // olms
// alienOrder(['xro','xma','per','prt','oxh','olv']); // aehtvxrplmo
// alienOrder(['mdxok','mrolw','mroqs','kptz','klr','klon','zvef','zrsu','zzs','orm','oqt']); // defmnpstuvwxklrzqo
