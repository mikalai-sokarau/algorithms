/*
Statement:
There are a total of numCourses courses you have to take. The courses are labeled from 0 to numCourses - 1.
You are also given a prerequisites array, where prerequisites[i] = [a[i], b[i]] indicates that you must
take course b[i] first if you want to take the course a[i].
For example, the pair [1,0] indicates that to take course 1, you have to first take course 0.
Return TRUE if all of the courses can be finished. Otherwise, return FALSE.


Test:
[[1,0],[2,1],[4,3]], 5         :   true
[[1,2],[2,0],[3,1]], 4         :   true
[[1,2],[2,1],[3,1]], 4         :   false
[[1,2],[0,1]], 4               :   true


Complexity:
T: O(v + e)
S: O(v + e)
where v is the total number of vertices and e is the total number of edges in the graph.
*/

function canFinish(numCourses, prerequisites) {
  const adjacencyList = [];
  const inDegree = [];
  const queue = [];
  const taken = 0;

  // preparing adjacencyList and indegree
  for (const [child, parent] of prerequisites) {
    if (!adjacencyList[parent]) {
      adjacencyList[parent] = [];
    }
    if (!adjacencyList[child]) {
      adjacencyList[child] = [];
    }
    if (!inDegree[parent]) {
      inDegree[parent] = 0;
    }
    if (!inDegree[child]) {
      inDegree[child] = 0;
    }

    inDegree[child]++;
    adjacencyList[parent].push(child);
  }

  // adding cources without dependencies to the queue
  for (let i = 0; i < inDegree.length; i++) {
    if (inDegree[i] === 0) {
      queue.push(i);
    }
  }

  while (queue.length) {
    const curr = queue.shift();

    taken++;

    for (const course of adjacencyList[curr]) {
      inDegree[course]--;

      if (inDegree[course] === 0) {
        queue.push(course);
      }
    }
  }

  return taken === numCourses;
}

/*
  [[1,0],[2,1],[4,3]], 5         :   true
  graph = [
    [0]: [1],
    [1]: [2],
    [2]: [],
    [3]: [4]
    [4]: []
  ]
  indegree = [
    [0]: 0,
    [1]: 1,
    [2]: 1,
    [3]: 0,
    [4]: 1
  ]
*/

console.log(
  canFinish(4, [
    [1, 2],
    [2, 1],
    [3, 1],
  ])
);
