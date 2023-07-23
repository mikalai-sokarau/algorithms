/*
 * @lc app=leetcode id=207 lang=javascript
 *
 * [207] Course Schedule
 */

// @lc code=start
/*
T: O(N + M)
S: O(N + M)
technique: topological sort + adjacensy list
*/
/**
 * @param {number} numCourses
 * @param {number[][]} prerequisites
 * @return {boolean}
 */
var canFinish = function (numCourses, prerequisites) {
    const indegree = new Array(numCourses).fill(0); // T: O(N) S: O(N)
    const adjacencyList = indegree.map(() => []); // T: O(M) S: O(M)

    for (let [a, b] of prerequisites) {
        adjacencyList[b].push(a);
        indegree[a]++;
    } // T: O(N)

    const stack = []; // S: O(N)
    
    for (let i = 0; i < indegree.length; i++) {
        if (indegree[i] === 0) {
            stack.push(i);
        }
    } // T: O(N)

    let counter = 0;
    
    while(stack.length) {
        const vertex = stack.pop();

        counter++;

        for (let v of adjacencyList[vertex]) {
            indegree[v]--;

            if (indegree[v] === 0) {
                stack.push(v);
            }
        }
    } // T: O(N + M)

    return counter === numCourses;
}
// @lc code=end