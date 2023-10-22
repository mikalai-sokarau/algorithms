/*
Statement:
Given a binary tree, you need to compute the length of the tree’s diameter.
The diameter of a binary tree is the length of the longest path between any two nodes in a tree.
This path may or may not pass through the root.

Note: The length of the path between two nodes is represented by the number of edges between them.


Test:
        1
       / \
      2   3
     / \
    4   5
   /   /
  8   9
 /   /
10  11
Output: 6 (10 -> 8 -> 4 -> 2 -> 5 -> 9 -> 11)

  5
 / \
6   7
   / \
  8   9
Output: 3 (6 -> 5 -> 7 -> 8/9)


Solution:
Post order DFS


Complexity:
T: O(n)
S: O(n)
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

function diameterOfBinaryTree(root) {
  let max = 0;

  const dfs = (node) => {
    if (!node) {
      return 0;
    }

    const left = dfs(node.left);
    const right = dfs(node.right);

    max = Math.max(max, left + right);

    return Math.max(left, right) + 1;
  };

  dfs(root);

  return max;
}
