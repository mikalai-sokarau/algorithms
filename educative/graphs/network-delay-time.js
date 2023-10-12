/*
Statement:
A network of n nodes labeled 1 to n is provided along with a list of travel times for directed edges
represented as times[i]=(x​, y, t), where x is the source node, y​ is the target node,
and t is the delay time from the source node to the target node.
Considering we have a starting node, k, we have to determine the minimum time required for all the remaining
n−1 nodes to receive the signal.
Return −1 if it’s not possible for all n−1 nodes to receive the signal.


Test:
[[1,2,1],[2,3,1],[3,4,1]],4,1           : 3
[[2,1,1],[1,3,1],[3,4,2],[5,4,2]],5,1   : -1
[[1,2,1],[2,3,2],[3,4,3],[4,1,4]],4,2   : 9
[[1,2,1],[1,3,4],[1,5,10],[2,3,2],[5,3,1],[3,4,1]],5,1    :   10


Solution:
Create an adjacency list in the format { [parent]: [[child1, time], [child2, time], ...] }.
Create a map to store min time to visit a node.
Start traversing from the k node in the adjacency list.
Put a node to the map each time it's touched and min time to reach it.
After traversing check that map size === n if not return -1 otherwise return max from visited.


Complexity:
T: O(n)
S: O(v + e) where v is a number of verticies of the graph and e is a number of edges
*/

function networkDelayTime(times, n, k) {
  const adjacencyList = {};
  const visited = new Map();

  for (const [node, ...rest] of times) {
    if (!adjacencyList[node]) {
      adjacencyList[node] = [];
    }

    adjacencyList[node].push(rest);
  }

  visited.set(k, 0);
  traverse(k, adjacencyList, visited, 0);

  if (visited.size === n) {
    return Math.max(...visited.values());
  }

  return -1;
}

const traverse = (node, adjacencyList, visited, totalTime) => {
  if (!adjacencyList[node]) {
    return;
  }

  for (const [child, time] of adjacencyList[node]) {
    const currentTime = totalTime + time;
    const bestKnownTime = visited.get(child) ?? Infinity;

    if (currentTime < bestKnownTime) {
      visited.set(child, currentTime);
      traverse(child, adjacencyList, visited, currentTime);
    }
  }
};

console.log(
  networkDelayTime(
    [
      [1, 2, 1],
      [2, 3, 2],
      [3, 4, 3],
      [4, 1, 4],
    ],
    4,
    2
  )
);
