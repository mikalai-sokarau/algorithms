/*
DAG - directed acyclic graph

Adjacency list (vertex children list):
1. Create an empty array.
2. Fill the array with empty arrays based on number of nodes in the given graph.
3. Loop throgh the array representing a graph.
4. Add children node to the array stored under the index of the node.

Indegree list (number of vertex parents):
1. Create an empty array.
2. Loop through the array that represents a graph.
3. Increment by 1 value by index in the array each time the parent is present in the graph array.

Topological sort (remove nodes that don't have parents to make sure that graph doesn't have cycles):
1. Create an adjacency list and indegree list based on the graph.
2. Initiate an empty stack.
3. Loop through the indegree list, add all indexes of the nodes with 0 parents to the stack.
4. Loop through the stack untill its length > 0.
5. Pop an index of the top node from the stack.
6. Get indexes of children nodes from the adjacency list.
7. Decrease number of parents of each children in the indegree list by 1.
8. If there are 0 parents - add this index to the stack.
9. When there are 0 items in the stack - the loop is over.
10. If indegree list still contains nodes with the number of parents > 0 - there is a loop in the graph.

Dijkstra algorithm (to find the best path):
1. Initialize a queue to navigate through nodes.
2. Initialize an array to save distances. Length of the array equals to the number of nodes. The array filled with +Infinity values.
3. Start with the starting node.
4. Add its index as 0 to the array with distances (since visiting this node doesn't take any time).
5. Loop through vertexies reachable from this node.
6. If the edge weight to the vertex less then the weight saved in the distances array, update it and push its index to the queue.
7. Repeat for every edge.
8. Choose a node with the smallest weight from the queue.
9. Repeat steps 5-8 untill the queue is empty.
10. If the distances array contains +Infinity values - vertexies under these indexes are unreachable.
*/