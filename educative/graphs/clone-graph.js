/*
Statement:
Given a graph that has nodes with data and a list of neighbors, create a deep copy of the graph.
The graph has the following properties:
Undirected: The edges of the graph are bidirectional.
Connected: A path will always exist between any two nodes.
In a deep copy, a new instance of every node is created with the same data as in the original graph.
Any modifications made to the new graph are not reflected in the original graph.
For simplicity, we are creating a graph using an adjacency list, where the data of each node is represented by its index in the adjacency list.
Each list in the adjacency list describes the set of neighbors of a node in the graph.
The index in the adjacency list starts from 1.

For example, for [[2, 3], [1, 3], [1, 2]], there are three nodes in the graph:
1st node (data = 1): Neighbors are 2nd node (data = 2) and 3rd node (data = 3).
2nd node (data = 2): Neighbors are 1st node (data = 1) and 3rd node (data = 3).
3rd node (data = 3): Neighbors are 1st node (data = 1) and 2nd node (data = 2).


Test:
[[2,3],[1,3],[1,2]]

    2
  /   \
 1 --- 3


Solution:
Create a new root node.
Start a recursion function looping through its neighbors.
Use Map to check if a node is already cloned.
Call the function with each neighbor separately.


Complexity:
T: O(n + m) - where n is the number of nodes and m is the number of edges
S: O(n)
*/

export class Node {
  constructor(d) {
    this.data = d;
    this.neighbors = [];
  }
}

function clone(root) {
  if (!root) {
    return root;
  }

  return cloneNeighbors(root, new Map());
}

function cloneNeighbors(node, cloned) {
  let clonedNode = cloned.get(node.data);

  if (!clonedNode) {
    clonedNode = new Node(node.data);

    cloned.set(node.data, clonedNode);

    for (const n of node.neighbors) {
      const clonedNeighbor = cloneNeighbors(n, cloned);

      clonedNode.neighbors.push(clonedNeighbor);
    }
  }

  return clonedNode;
}
