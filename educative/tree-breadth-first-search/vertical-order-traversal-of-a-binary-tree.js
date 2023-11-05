/*
Statement:
Find the vertical order traversal of a binary tree when the root of the binary tree is given.
In other words, return the values of the nodes from top to bottom in each column,
column by column from left to right.
If there is more than one node in the same column and row, return the values from left to right.


Complexity:
T: O(n)
S: O(n + h) where h is the height of the tree
*/

export function verticalOrder(root) {
  if (!root) return [];

  const leftSide = [];
  const rightSide = [];

  const dfs = (node, level) => {
    if (!node) return;

    if (level < 0) {
      const l = Math.abs(level) - 1;

      if (!leftSide[l]) leftSide[l] = [];

      leftSide[l].push(node.data);
    } else {
      if (!rightSide[level]) rightSide[level] = [];

      rightSide[level].push(node.data);
    }

    dfs(node.left, level - 1);
    dfs(node.right, level + 1);
  };

  dfs(root, 0);

  return [...leftSide.reverse(), ...rightSide];
}
