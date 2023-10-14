/*
Statement:
A maze consists of n rooms numbered from 1−n, and some rooms are connected by corridors.
You are given a 2D integer array, corridors, where corridors[i]=[room1,room2]
indicates that there is a corridor connecting room1 and room2,
allowing a person in the maze to go from room1 to room2 and vice versa.
The designer of the maze wants to know how confusing the maze is.
The confusion score of the maze is the number of different cycles of length 3.
For example, 1→2→3→1 is a cycle of length 3, but 1→2→3→4 and 1→2→3→2→1 are not.
Two cycles are considered to be different if one or more of the rooms visited in the first cycle
is not in the second cycle.

Return the confusion score of the maze.


Test:
[[1,2],[3,2],[4,1],[2,4],[5,1],[5,4]], 5    :   2 (1 -> 2 -> 4 -> 1, 1 -> 4 -> 5 -> 1)

       2

   /   |   \

4   -  1     3

   \   |

       5


Solution:
Create an adjacency list
while creating check if there are intercections between rooms in the list
if the intercection is found - increment a counter
return a counter


Complexity:
T: O(v * e) where v is the number of vertices and e is the number of edges
S: O(n^2)
*/

function numberOfPaths(n, corridors) {
  const adjacencyList = {};
  let counter = 0;

  for (let i = 1; i <= n; i++) {
    adjacencyList[i] = {};
  }

  for (const [room1, room2] of corridors) {
    for (let i = 1; i <= n; i++) {
      if (adjacencyList[i][room2] && adjacencyList[i][room1]) {
        counter++;
      }
    }

    adjacencyList[room1][room2] = true;
    adjacencyList[room2][room1] = true;
  }

  return counter;
}
