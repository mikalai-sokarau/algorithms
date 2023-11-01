/*
Statement:
You are given the root of a binary tree, and your task is to determine the maximum depth of this tree.
The maximum depth of a binary tree is determined by the count of nodes found on the longest pathway
from the root node to the farthest leaf node.


Test:
Input:        | Output:
       1      | 4
     /   \    |
    2     3   |
     \   / \  |
      5 6   4 |
         \    |
          1   |

Solution:



Complexity:
T: O(n)
S: O(h) where h is height of the tree
*/

export function findMaxDepth(root) {
  let max = 0;

  function dfs(node, level = 0) {
    if (!node) return;

    level++;
    max = Math.max(max, level);

    dfs(node.left, level);
    dfs(node.right, level);
  }

  dfs(root);

  return max;
}
