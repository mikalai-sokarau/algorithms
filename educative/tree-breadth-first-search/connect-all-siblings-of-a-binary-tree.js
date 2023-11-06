/*
Statement:
The task is to connect all nodes in a binary tree.
Connect them from left to right so that the next pointer of each node points to the node on its immediate right.
The next pointer of the right-most node at each level should point to the first node of the next level in the tree.
Each node in the given binary tree for this problem includes a next pointer,
along with the left and right pointers.
Your solution must set the next pointer to connect the same level nodes to each other and across levels.


Test:
Input:                  |Outut
            1           | 1 -> 2 -> 3 -> 4 -> 5 -> 6 -> 7 -> null
        /      \        |
       2        3       |
     /   \    /   \     |
    4     5  6     7    |



Solution:
BFS


Complexity:
T: O(n)
S: O(n)
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

export function populateNextNodePointers(root) {
  const queue = [root];
  let prev = null;

  while (queue.length) {
    const curr = queue.shift();

    if (prev) prev.next = curr;
    prev = curr;

    curr.left && queue.push(curr.left);
    curr.right && queue.push(curr.right);
  }

  return root;
}
