/*
Statement:
Given the root of a binary tree, check whether it is a symmetric tree.
A symmetric tree refers to a tree that is a mirror of itself, i.e., symmetric around its root.


Test:
Input:
       1
      / \
     2   2
    /     \
   3       3
Output: true

Input:
       1
      / \
     2   3
    /     \
   3       2
Output: false

Solution:



Complexity:
T: O(n)
S: O(n)
*/

function isSymmetric(root) {
  if (!root) return true;

  let stack = [root];

  while (stack.length) {
    const level = [];

    for (let i = 0; i < stack.length; i++) {
      const left = stack[i];
      const right = stack[stack.length - i - 1];

      if (!left && !right) continue;
      else if (!left || !right || left.data !== right.data) return false;
    }

    for (let i = stack.length; i > 0; i--) {
      const curr = stack.pop();

      if (!curr) continue;

      level.push(curr.left);
      level.push(curr.right);
    }

    stack = level;
  }

  return true;
}
