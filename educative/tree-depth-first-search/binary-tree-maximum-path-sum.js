/*
Statement:
Given the root of a binary tree, return the maximum sum of any non-empty path.
A path in a binary tree is defined as follows:
A sequence of nodes in which each pair of adjacent nodes must have an edge connecting them.
A node can only be included in a path once at most.
Including the root in the path is not compulsory.
You can calculate the path sum by adding up all node values in the path.
To solve this problem, calculate the maximum path sum given the root of a binary tree
so that there won’t be any greater path than it in the tree.


Test:
Input:              | Output:
         5          | 19 (9,-2,5,4,3)
       /   \        |
    -2      4       |
   /  \    /  \     |
  5    9  3    1    |

Input:              | Output:
        -8          | 9 (3,4,2)
       /   \        |
     5      4       |
   /  \    /  \     |
  1    2  3    2    |


Solution:
Postorder DFS
Calculate the best path including:
1. both children and root
2. only one biggest child and root
Every step check if the current path is biggeer than the biggest stored


Complexity:
T: O(n)
S: O(h) where h is the height of the tree
*/

/*
class TreeNode {
  constructor(data) {
    this.data = data;
    this.left = null;
    this.right = null;
  }
}
*/

function maxPathSum(root) {
  let max = -Infinity;

  function calculatePath(node) {
    if (!node) {
      return 0;
    }

    const left = calculatePath(node.left);
    const right = calculatePath(node.right);

    max = Math.max(left + right + node.data, max);

    return Math.max(left, right) + node.data;
  }

  calculatePath(root);

  return max;
}
