/*
Statement:
Given two words, src and dest, and a list, words, return the number of words
in the shortest transformation sequence from src to dest. If no such sequence can be formed, return 0.
A transformation sequence is a sequence of words (src → word1 → word2 → word3 → ... → wordj)
that has the following properties: wordj ​= dest
Every pair of consecutive words differs by a single character.
All the words in the sequence are present in the words.
The src does not need to be present in words.


Test:
Input:
'dog','cat',['hog','dot','pot','pop','mop','map','cap','cat']
Output:
8


Complexity:
T: O(n^2 * m) where m is a number of letters in a word
S: O(n)
*/

function wordLadder(src, dest, words) {
  const queue = new Queue();
  let counter = 0;
  let steps = 1;

  queue.enqueue(src);
  counter++;

  while (counter) {
    const curr = queue.dequeue();

    if (curr === dest) return steps;

    for (let i = 0; i < words.length; i++) {
      if (!words[i]) continue;

      let mismatches = 0;

      for (let j = 0; j < curr.length; j++) {
        if (curr[j] !== words[i][j]) mismatches++;
      }

      if (mismatches === 1) {
        queue.enqueue(words[i]);
        words[i] = null;
      }
    }

    counter--;

    if (!counter) {
      steps++;
      counter = queue.size();
    }
  }

  return 0;
}
