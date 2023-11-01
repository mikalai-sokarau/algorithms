/*
 * @lc app=leetcode id=98 lang=javascript
 *
 * [98] Validate Binary Search Tree
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
/*
T: O(n)
S: O(h) where h is height of the tree
*/
/**
 * @param {TreeNode} root
 * @return {boolean}
 */
var isValidBST = function (root) {
    const dfs = (node, min, max) => {
        if (!node) return true;

        if (node.val >= max || !dfs(node.left, min, node.val)) {
          return false;
        }
        if (node.val <= min || !dfs(node.right, node.val, max)) {
          return false;
        }

        return true;
    }

    return dfs(root, -Infinity, Infinity);
};
// @lc code=end