/*
Statement:
Let’s assume that there are a total of n courses labeled from 0 to n−1.
Some courses may have prerequisites. A list of prerequisites is specified such that if Prerequisites i=a,b,
you must take course b before course a.
Given the total number of courses n and a list of the prerequisite pairs,
return the course order a student should take to finish all of the courses.
If there are multiple valid orderings of courses, then the return any one of them.

Note: There can be a course in the 0 to n−1 range with no prerequisites.


Test:
4, [[0,1],[1,2],[3,1]]    :   [2,1,0,3]


Complexity:
T: O(v + e)
S: O(v + e)
where v is the total number of vertices and e is the total number of edges in the graph.
*/

function findOrder(n, prerequisites) {
  const adjacencyList = [];
  const inDegree = [];
  const queue = [];
  const result = [];

  // building dependenices graph and adjacency list
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

  // pushing classes without dependencies to the queue
  for (let i = 0; i < inDegree.length; i++) {
    if (inDegree[i] === 0) {
      queue.push(i);
    }
  }

  // iterating through the queue, building compilation order
  while (queue.length) {
    const course = queue.shift();

    result.push(course);

    for (const child of adjacencyList[course]) {
      inDegree[child]--;

      if (inDegree[child] === 0) {
        queue.push(child);
      }
    }
  }

  // checking that all the verticies were counted
  if (result.length !== n) {
    result.length = 0;
  }

  return result;
}

console.log(
  findOrder(3, [
    [1, 0],
    [2, 0],
    [2, 1],
    [1, 2],
  ])
);
