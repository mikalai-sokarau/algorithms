/*
Statement:
You are given a root of a binary tree that has n number of nodes.
You have to return the right-side view in the form of a list.

A right-side view of a binary tree is the data of the nodes
that are visible when the tree is viewed from the right side.



Test:
Input               | Output:
        1           | [1,3,5,7]
      /   \         |
     2     3        |
    /       \       |
   4         5      |
  / \               |
 6   7              |


Solution:



Complexity:
T: O(n)
S: O(h) where h is height of the tree
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

function rightSideView(root) {
  if (!root) return [];

  function dfs(node, index, result) {
    if (index === result.length) {
      result.push(node.data);
    }

    for (const child of [node.right, node.left]) {
      if (child) {
        dfs(child, index + 1, result);
      }
    }

    return result;
  }

  return dfs(root, 0, []);
}
