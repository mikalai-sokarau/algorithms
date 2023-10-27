/*
Statement:
Given the root node of a binary tree with n nodes,
your task is to find the lowest common ancestor of two of its nodes, p and q.
Note: The lowest common ancestor of two nodes, p and q, is defined as the lowest node in the binary tree
that has both p and q as descendants.
A node can also be a descendant of itself.
For example, if q is a descendant of p, and we know that p is a descendant of itself,
then p will be the lowest common ancestor of p and q.


Test:



Solution:



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

class Solution {
  lowestCommonAncestor(node, p, q) {
    if (!node || node.data === p.data || node.data === q.data) {
      return node;
    }

    const left = this.lowestCommonAncestor(node.left, p, q);
    const right = this.lowestCommonAncestor(node.right, p, q);

    if (left && right) {
      return node;
    }

    return left || right;
  }
}
