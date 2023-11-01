/*
Statement:
Given the root of a binary tree, check whether it is a valid binary search tree (BST).

A binary tree is a valid BST if for every node:
* The value of the node is greater than or equal to the value of its left node.
* The value of the node is less than or equal to the value of its right node.
* Both the left and right subtrees are valid BSTs.


Test:
Input    | Output
  7      | false
 / \     |
4   8    |
   / \   |
  6   9  |

Input    | Output
  7      | true
 / \     |
4   9    |
   / \   |
  8   10 |


Solution:
put up the biggest value from the left side
put up the smallest value from the right side
compare on the right side that
left < node < right and smallest < node
return min of smallest || left
compare on the left side that
left < node < right and biggest > node
return max of biggest || right


Complexity:
T: O(n)
S: O(h) where h is height of the tree
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
function validateBst(root) {
  function dfs(node, min, max) {
    if (!node) return true;

    if (node.data > max || !dfs(node.left, min, node.data)) {
      return false;
    }
    if (node.data < min || !dfs(node.right, node.data, max)) {
      return false;
    }

    return true;
  }

  return dfs(root, -Infinity, Infinity);
}
