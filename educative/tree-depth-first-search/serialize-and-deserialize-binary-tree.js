/*
Statement:
Serialize a given binary tree to a file and deserialize it back to a tree.
Make sure that the original and the deserialized trees are identical.

Serialize: Write the tree to a file.
Deserialize: Read from a file and reconstruct the tree in memory.

Serialize the tree into a list of integers, and then, deserialize it back from the list to a tree.
For simplicity’s sake, there’s no need to write the list to the files.


Test:
      1
    /   \
   2     3
  / \
 4   5
    / \
   6   7

Serialize:
Level order: [1,2,!3,!4,5,!6,!7]
Inorder: [!4,2,!6,5,!7,1,!3]
Preorder: [1,2,!4,5,!6,!7,!3]
Postorder: [!4,!6,!7,5,2,!3,1]
Where ! symbol means that the node is a leaf

Complexity:
serialize
T: O(n)
S: O(n)

deserialize
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

import { Queue } from '@datastructures-js/queue';

const DELIMETER = ',';
const ONLY_LEFT_CHILD = 'l';
const ONLY_RIGHT_CHILD = 'r';
const BOTH_CHILDREN = 'b';

/*
      1
    /   \
   2     3
  / \     \   :  '1,2,r3,n4,l5,n6,n7'
 4   5     6
    /
   7
*/
export function serialize(root) {
  if (!root) return '';

  const queue = [];
  const stack = [];

  queue.push(root);

  while (queue.length) {
    const node = queue.shift();
    let { data } = node;

    if (node.left && node.right) {
      data += BOTH_CHILDREN;
    } else if (node.left) {
      data += ONLY_LEFT_CHILD;
    } else if (node.right) {
      data += ONLY_RIGHT_CHILD;
    }

    if (node.left) {
      queue.push(node.left);
    }
    if (node.right) {
      queue.push(node.right);
    }

    stack.push(data);
  }

  return stack.join(DELIMETER);
}

/*
                               1
                             /   \
                            2     3
'1b,2b,3r,4,5l,6,7'   :    / \     \
                          4   5     6
                             /
                            7
*/
export function deserialize(stream) {
  if (!stream.length) return null;

  let counter = 0;
  const queue = [];
  const values = stream.split(DELIMETER);
  const head = new TreeNode(values[0]);

  queue.push(head);
  counter++;

  while (queue.length) {
    let node = queue.shift();
    const indicator = node.data[node.data.length - 1];

    if (indicator === BOTH_CHILDREN) {
      node.left = new TreeNode(values[counter++]);
      node.right = new TreeNode(values[counter++]);
      queue.push(node.left);
      queue.push(node.right);
    } else if (indicator === ONLY_LEFT_CHILD) {
      node.left = new TreeNode(values[counter++]);
      queue.push(node.left);
    } else if (indicator === ONLY_RIGHT_CHILD) {
      node.right = new TreeNode(values[counter++]);
      queue.push(node.right);
    }

    node.data = parseInt(node.data);
  }

  return head;
}
