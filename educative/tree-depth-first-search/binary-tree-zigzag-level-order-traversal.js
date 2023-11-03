/*
Statement:
Given a binary tree, return its zigzag level order traversal.
The zigzag level order traversal corresponds to traversing nodes from left to right for one level,
right to left for the next level, and so on, reversing the direction after every level.


Test:



Solution:



Complexity:
T: O()
S: O()
*/

function zigzagLevelOrder(root) {
  if (!root) return [];

  const result = [[]];
  let stack = [root];
  let pointer = 0;
  let counter = 1;
  let direction = 1;

  while (counter) {
    const curr = stack[pointer];

    if (curr.left) stack.push(curr.left);
    if (curr.right) stack.push(curr.right);

    result[result.length - 1].push(curr.data);
    pointer += direction;
    counter--;

    if (!counter) {
      stack = stack.slice(result[result.length - 1].length);
      counter = stack.length;
      direction *= -1;
      pointer = direction > 0 ? 0 : stack.length - 1;

      if (stack.length) {
        result.push([]);
      }
    }
  }

  return result;
}
