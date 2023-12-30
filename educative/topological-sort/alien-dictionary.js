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
T: O()
S: O()
*/

function alienOrder(words) {
  const adjList = {};
  const indegree = new Array(26).fill(0);

  for (const word of words) {
    for (const char of word) {
      if (!adjList[char]) {
        adjList[char] = new Set();
      }
    }
  }

  for (let i = 1; i < words.length; i++) {
    const first = words[i - 1];
    const second = words[i];
    const length = Math.min(first.length, second.length);

    for (let j = 0; j < length; j++) {
      if (first[j] !== second[j]) {
        const firstChar = first[j];
        const secondChar = second[j];

        if (!adjList[firstChar].has(secondChar)) {
          adjList[firstChar].add(secondChar);
          indegree[secondChar.charCodeAt(0) - 'a'.charCodeAt(0)]++;
        }

        break;
      } else if (j === length - 1 && first.length > second.length) {
        return '';
      }
    }
  }

  const result = [];
  const queue = [];

  for (let i = 0; i < indegree.length; i++) {
    const char = String.fromCharCode('a'.charCodeAt(0) + i);

    if (adjList[char] && indegree[i] === 0) {
      queue.push(char);
    }
  }

  while (queue.length) {
    const curr = queue.shift();

    result.push(curr);

    for (const neighbor of adjList[curr]) {
      const char = neighbor.charCodeAt(0) - 'a'.charCodeAt(0);
      indegree[char]--;

      if (indegree[char] === 0) {
        queue.push(neighbor);
      }
    }
  }

  if (result.length !== Object.keys(adjList).length) {
    return '';
  }

  return result.join('');
}

// alienOrder(['o','l','m','s']); // olms
// alienOrder(['xro','xma','per','prt','oxh','olv']); // aehtvxrplmo
// alienOrder(['mdxok','mrolw','mroqs','kptz','klr','klon','zvef','zrsu','zzs','orm','oqt']); // defmnpstuvwxklrzqo
