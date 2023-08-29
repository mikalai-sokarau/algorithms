/*
Statement:
You’re given an array of positive integers, weights, where weights[i] is the weight of the i th index.
Write a function, Pick Index(), which performs weighted random selection to return an index from the weights array.
The larger the value of weights[i], the heavier the weight is, and the higher the chances of its index being picked.
Suppose that the array consists of the weights [12,84,35].
In this case, the probabilities of picking the indexes will be as follows:
Index 0: 12 / ( 12 + 84 + 35 ) = 9.2
Index 1: 84 / ( 12 + 84 + 35 ) = 64.1
Index 2: 35 / ( 12 + 84 + 35 ) = 26.7

Test:
-


Complexity:
constructor
T: O(n)
S: O(n)

pickIndex
T: O(log n)
S: O(1)
*/

class RandomPickWithWeight {
  constructor(weights) {
    this.runningSums = [];
    this.total = 0;

    for (const w of weights) {
      this.total += w;
      this.runningSums.push(this.total);
    }
  }

  pickIndex() {
    const target = Math.floor(Math.random() * this.total) + 1;
    let start = 0;
    let end = this.runningSums.length;

    while (start < end) {
      const mid = Math.floor((start + end) / 2);

      if (target > this.runningSums[mid]) {
        start = mid + 1;
      } else {
        end = mid;
      }
    }

    return start;
  }
}
