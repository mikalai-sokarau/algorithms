/*
Statement:
There are a total of n classes labeled with the English alphabet (A, B, C, and so on).
Some classes are dependent on other classes for compilation.
For example, if class B extends class A, then B has a dependency on A.
Therefore, A must be compiled before B.
Given a list of the dependency pairs, find the order in which the classes should be compiled.


Test:
[C,A],[B,A],[D,C],[E,B],[E,D]  :  [A,B,C,D,E]/[A,C,B,D,E]/[A,C,D,B,E]


Complexity:
T: O(v + e)
S: O(v)
where v is a number of verticies in the graph, e is a number of edges
*/

function findCompilationOrder(dependencies) {
  const graph = {};
  const indegree = {};
  const queue = [];
  const result = [];

  // building dependenices graph and adjacency list
  for (const [child, parent] of dependencies) {
    graph[parent] = graph[parent] ?? [];
    graph[child] = graph[child] ?? [];

    indegree[parent] = indegree[parent] ?? 0;
    indegree[child] = (indegree[child] ?? 0) + 1;

    graph[parent].push(child);
  }

  // pushing classes without dependencies to the queue
  for (const key in indegree) {
    if (indegree[key] === 0) {
      queue.push(key);
    }
  }

  // iterating through the queue, building compilation order
  while (queue.length > 0) {
    const curr = queue.shift();
    result.push(curr);

    for (const key of graph[curr]) {
      indegree[key]--;

      if (indegree[key] === 0) {
        queue.push(key);
      }
    }
  }

  // checking that all the verticies were counted
  if (result.length !== Object.keys(graph).length) {
    result.length = 0;
  }

  return result;
}

console.log(
  findCompilationOrder([
    ['C', 'A'],
    ['B', 'A'],
    ['D', 'C'],
    ['E', 'B'],
    ['E', 'D'],
  ])
);
