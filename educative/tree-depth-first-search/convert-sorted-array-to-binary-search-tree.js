/*
Statement:
Given an array of integers, nums, sorted in ascending order,
your task is to construct a height-balanced binary search tree (BST) from this array.

In a height-balanced BST, the difference of heights
of the left subtree and right subtree of any node is not more than 1.

Note: There can be multiple valid BSTs for a given input.


Test:
Input         | Output
[5,10,15,20]  |    10
              |   /  \
              |  5    15
              |        \
              |         20


Solution:



Complexity:
T: O(n)
S: O(log n)
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
// [1,3]
function sortedArrayToBST(nums) {
  function createTree(from, to) {
    if (from > to) return null;

    const mid = Math.floor((from + to) / 2);
    const node = new TreeNode(nums[mid]);

    node.left = createTree(from, mid - 1);
    node.right = createTree(mid + 1, to);

    return node;
  }

  return createTree(0, nums.length - 1);
}
