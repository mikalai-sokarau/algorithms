/*
Statement:
Given the root node of a binary tree, transform the tree by swapping each node’s left and right subtrees,
thus creating a mirror image of the original tree. Return the root of the transformed tree.


Test:
Input:           : Output:
      1          :          1
    /   \        :        /   \
   2     3       :       3     2
  / \     \      :      /     / \
 4   5     6     :     6     5   4

Solution:
It's possible to solve this task using DFS/BFS/recursion


Complexity:
T: O(n)
S: O(n)
*/

// class TreeNode {
//   constructor(data) {
//     this.data = data;
//     this.left = null;
//     this.right = null;
//   }
// }

function mirrorBinaryTree(root) {
  if (!root) {
    return root;
  }

  const stack = [root];

  while (stack.length) {
    const node = stack.pop();

    if (node.left) {
      stack.push(node.left);
    }
    if (node.right) {
      stack.push(node.right);
    }

    [node.left, node.right] = [node.right, node.left];
  }

  return root;
}
