/*
Statement:
Given a binary tree, return its zigzag level order traversal.
The zigzag level order traversal corresponds to traversing nodes from left to right for one level,
right to left for the next level, and so on, reversing the direction after every level.


Test:



Solution:



Complexity:
T: O(n)
S: O(n)
*/

function zigzagLevelOrder(root) {
  if (!root) return [];

  const result = [];
  const queue = [root];
  let moveRight = true;

  while (queue.length) {
    const level = [];

    for (let i = queue.length; i > 0; i--) {
      const curr = queue.shift();

      level.push(curr.data);
      curr.left && queue.push(curr.left);
      curr.right && queue.push(curr.right);
    }

    result.push(moveRight ? level : level.reverse());
    moveRight = !moveRight;
  }

  return result;
}
