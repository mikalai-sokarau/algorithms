/*
Statement:
Given a perfect binary tree, where each node contains an additional pointer called next.
This pointer is initially set to NULL for all nodes.
Your task is to connect all nodes of the same hierarchical level by setting the next pointer to its immediate right node.
The next pointer of the rightmost node at each level is set to NULL.


Test:
Input:           | Output:
        1        |         1 -> NULL
     /     \     |      /      \
    2       3    |     2   ->   3 -> NULL
   / \     / \   |   /  \      /  \
  4   5   6   7  |  4 -> 5 -> 6 -> 7 -> NULL


Complexity:
T: O(n)
S: O(1)
*/
/*
export class EduTreeNode {
  constructor(data) {
    this.data = data;
    this.left = null;
    this.right = null;
    this.next = null;
  }
}
*/

function populateNextPointers(root) {
  if (!root) return root;

  let mostLeft = root;

  while (mostLeft.left) {
    let curr = mostLeft;

    while (curr) {
      curr.left.next = curr.right;

      if (curr.next) curr.right.next = curr.next.left;

      curr = curr.next;
    }

    mostLeft = mostLeft.left;
  }

  return root;
}
