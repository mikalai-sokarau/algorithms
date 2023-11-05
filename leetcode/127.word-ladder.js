/*
 * @lc app=leetcode id=127 lang=javascript
 *
 * [127] Word Ladder
 */

// @lc code=start
/**
 * @param {string} beginWord
 * @param {string} endWord
 * @param {string[]} wordList
 * @return {number}
 */
var ladderLength = function (beginWord, endWord, wordList) {
  const queue = new Queue();
  let counter = 0;
  let steps = 1;

  queue.enqueue(beginWord);
  counter++;

  while (counter) {
    const curr = queue.dequeue();

    if (curr === endWord) return steps;

    for (let i = 0; i < wordList.length; i++) {
      if (!wordList[i]) continue;

      let mismatches = 0;

      for (let j = 0; j < curr.length; j++) {
        if (curr[j] !== wordList[i][j]) mismatches++;
      }

      if (mismatches === 1) {
        queue.enqueue(wordList[i]);
        wordList[i] = null;
      }
    }

    counter--;

    if (!counter) {
      steps++;
      counter = queue.size();
    }
  }

  return 0;
};
// @lc code=end
