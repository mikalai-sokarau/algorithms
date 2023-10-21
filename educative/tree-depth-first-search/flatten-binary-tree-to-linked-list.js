/*
Statement:
Given the root of a binary tree, the task is to flatten the tree into a linked list using the same TreeNode class.
The left child pointer of each node in the linked list should always be NULL,
and the right child pointer should point to the next node in the linked list.
The nodes in the linked list should be in the same order as that of the preorder traversal of the given binary tree.


Test:
             1
      2             3
  4      5      6       7
8   9  10 11  12 13   14 15

Input: [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15]
Output: 1 -> 2 -> 4 -> 8 -> 9 -> 5 -> 10 -> 11 -> 3 -> 6 -> 12 -> 13 -> 7 -> 14 -> 15


Solution:
Morris Traversal
https://leetcode.com/problems/flatten-binary-tree-to-linked-list/solutions/1207642/js-python-java-c-simple-o-1-space-recursive-solutions-w-explanation/


Complexity:
T: O(n)
S: O(1)
*/

class TreeNode {
  constructor(data) {
    this.data = data;
    this.left = null;
    this.right = null;
  }
}

function flattenTree(root) {
  let curr = root;

  while (curr) {
    if (curr.left) {
      let last = curr.left;

      while (last.right) {
        last = last.right;
      }

      last.right = curr.right;
      curr.right = curr.left;
      curr.left = null;
    }

    curr = curr.right;
  }

  return root;
}
