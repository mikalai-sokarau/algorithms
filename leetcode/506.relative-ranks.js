// import { MaxPriorityQueue } from '@datastructures-js/priority-queue'
/*
 * @lc app=leetcode id=506 lang=javascript
 *
 * [506] Relative Ranks
 */

// @lc code=start
/*
T: (n log n)
S: (n)
*/
/**
 * @param {number[]} score
 * @return {string[]}
 */
var findRelativeRanks = function(score) {
    const queue = new MaxPriorityQueue();
    const result = [];

    for (let i = 0; i < score.length; i++) {
        queue.enqueue(i, score[i]);
    }

    for (let i = 0; i < score.length; i++) {
        let rank;

        switch (i) {
            case 0:
                rank = 'Gold Medal';
                break;
            case 1:
                rank = 'Silver Medal';
                break;
            case 2:
                rank = 'Bronze Medal';
                break;
            default:
                rank = (i + 1).toString();;
        }

        result[queue.dequeue().element] = rank;
    }

    return result;
};
// @lc code=end

