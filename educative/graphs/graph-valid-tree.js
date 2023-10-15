/*
Statement:
Given n as the number of nodes and an array of the edges of a graph, find out if the graph is a valid tree.
The nodes of the graph are labeled from 0 to n−1, and edges[i]=[x,y] represents
an undirected edge connecting the nodes x and y of the graph.
A graph is a valid tree when all the nodes are connected and there is no cycle between them.


Test:
[[0,1],[0,2],[0,3]]   :   true
[[0,1],[0,2],[1,2]]   :   false


Solution:
If a tree does not have a cycle - all tree leafs must have only one root.
It's needed to check if a leaf is already attached to the parent
  yes: return false
  no: continue traversing


Complexity:
T: O(e) where e is the length of the edges array.
S: O(n) where n is the number of vertices.
*/

function validTree(n, edges) {
  const seen = [];

  for (const [parent, child] of edges) {
    if (seen[child]) {
      return false;
    }

    seen[child] = true;
  }

  return true;
}
