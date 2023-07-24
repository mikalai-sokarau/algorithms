/*
 * @lc app=leetcode id=743 lang=javascript
 *
 * [743] Network Delay Time
 */
// @lc code=start
/*
T: O(NlogN)
S: O(E + N)
Technique: Greedy method + Dijkstra algorithm
*/
/**
 * @param {number[][]} times
 * @param {number} n
 * @param {number} k
 * @return {number}
 */
var networkDelayTime = function (times, n, k) {
    const distances = new Array(n).fill(Infinity);
    const adjacencyList = distances.map(() => []);
    const queue = new FakePriorityQueue(k - 1);

    distances[k - 1] = 0;

    for (let [source, target, weight] of times) {
        adjacencyList[source - 1].push([target - 1, weight]);
    }

    while (queue.size()) {
        const currentVertex = queue.pop();
        const adjacent = adjacencyList[currentVertex];

        for (let [target, weight] of adjacent) {
            const totalWeight = distances[currentVertex] + weight;

            if (totalWeight < distances[target]) {
                distances[target] = totalWeight;
                queue.add(target);
            }
        }
    }

    const max = Math.max(...distances);

    return max === Infinity
        ? -1
        : max;
};

// fake PQ implementation
class FakePriorityQueue {
    constructor(index) {
        this.queue = [index];
    }

    add(index) {
        this.queue.push(index);
        this.queue.sort((a, b) => b - a);
    }

    pop() {
        return this.queue.pop();
    }

    size() {
        return this.queue.length;
    }
}
// @lc code=end

