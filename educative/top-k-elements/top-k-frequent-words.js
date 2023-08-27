/*
Statement:
Given a string array, words, and an integer k, return the k most frequent strings.
Sort the frequencies from highest to lowest and then return the top k frequent words.
Words with the same frequency should be sorted by their lexicographical order.


Test:
['abcd','cda','abcd','bcd','cda'],2     :   ['abcd','cda']
['abcd','cda','abcd','bcd','cda'],1     :   ['abcd']


Complexity:
T: O(n log k)
S: O(n)
*/

export function topKFrequent(words, k) {
  const map = new Map();
  const frequencies = [];
  const result = [];

  for (const w of words) {
    map.set(w, (map.get(w) ?? 0) + 1);
  }

  for (const [word, freq] of map) {
    if (!frequencies[freq]) {
      frequencies[freq] = [];
    }

    frequencies[freq].push(word);
  }

  for (let i = frequencies.length - 1; i >= 0; i--) {
    if (result.length >= k) {
      result.length = k;
      break;
    }

    if (frequencies[i]) {
      if (frequencies[i].length > 1) {
        frequencies[i].sort((a, b) => a.localeCompare(b));
      }

      result.push(...frequencies[i]);
    }
  }

  return result;
}
