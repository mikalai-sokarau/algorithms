/*
Statement:
Given the root of a binary tree, display the values of its nodes while performing a level order traversal.
Return the node values for all levels in a string separated by the character :.
If the tree is empty, i.e., the number of nodes is 0, then return “None” as the output.


Complexity:
T: O(n)
S: O(n)
*/

function levelOrderTraversal(root) {
  if (!root) return 'None';

  const queue = new Queue();
  let counter = 1;
  let result = '';

  queue.enqueue(root);

  while (counter) {
    const curr = queue.dequeue();

    counter--;
    result += curr.data;
    result += counter ? ', ' : ' : ';

    if (curr.left) queue.enqueue(curr.left);
    if (curr.right) queue.enqueue(curr.right);
    if (counter === 0) counter = queue.length;
  }

  return result.slice(0, result.length - 3);
}
