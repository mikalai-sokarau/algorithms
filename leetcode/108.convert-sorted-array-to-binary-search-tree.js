/*
 * @lc app=leetcode id=108 lang=javascript
 *
 * [108] Convert Sorted Array to Binary Search Tree
 */

// @lc code=start
/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {number[]} nums
 * @return {TreeNode}
 */
var sortedArrayToBST = function (nums) {
  function createTree(from, to) {
    if (from > to) return null;

    const mid = Math.floor((from + to) / 2);
    const node = new TreeNode(nums[mid]);

    if (mid !== from) {
      node.left = createTree(from, mid - 1);
    }
    if (mid !== to) {
      node.right = createTree(mid + 1, to);
    }

    return node;
  }

  return createTree(0, nums.length - 1);
};

// @lc code=end
