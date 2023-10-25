/*
 * @lc app=leetcode id=297 lang=javascript
 *
 * [297] Serialize and Deserialize Binary Tree
 */

// @lc code=start
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
const DELIMETER = ',';
const ONLY_LEFT_CHILD = 'l';
const ONLY_RIGHT_CHILD = 'r';
const BOTH_CHILDREN = 'b';

/**
 * Encodes a tree to a single string.
 *
 * @param {TreeNode} root
 * @return {string}
 */
var serialize = function (root) {
  if (!root) return '';

  const queue = new Queue();
  const stack = [];

  queue.enqueue(root);

  while (!queue.isEmpty()) {
    const node = queue.dequeue();
    let { val } = node;

    if (node.left && node.right) {
      val += BOTH_CHILDREN;
    } else if (node.left) {
      val += ONLY_LEFT_CHILD;
    } else if (node.right) {
      val += ONLY_RIGHT_CHILD;
    }

    if (node.left) {
      queue.enqueue(node.left);
    }
    if (node.right) {
      queue.enqueue(node.right);
    }

    stack.push(val);
  }

  return stack.join(DELIMETER);
};

/**
 * Decodes your encoded data to tree.
 *
 * @param {string} data
 * @return {TreeNode}
 */
var deserialize = function (stream) {
  if (!stream.length) return null;

  let counter = 0;
  const queue = new Queue();
  const values = stream.split(DELIMETER);
  const head = new TreeNode(values[counter]);

  queue.enqueue(head);
  counter++;

  while (!queue.isEmpty()) {
    let node = queue.dequeue();
    const indicator = node.val[node.val.length - 1];

    switch (indicator) {
      case BOTH_CHILDREN:
        node.left = new TreeNode(values[counter++]);
        node.right = new TreeNode(values[counter++]);
        queue.enqueue(node.left);
        queue.enqueue(node.right);
        break;
      case ONLY_LEFT_CHILD:
        node.left = new TreeNode(values[counter++]);
        queue.enqueue(node.left);
        break;
      case ONLY_RIGHT_CHILD:
        node.right = new TreeNode(values[counter++]);
        queue.enqueue(node.right);
        break;
    }

    node.val = parseInt(node.val);
  }

  return head;
};

/**
 * Your functions will be called as such:
 * deserialize(serialize(root));
 */
// @lc code=end
