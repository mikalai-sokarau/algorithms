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
T: O(N)
S: O(N)
*/
/**
 * @param {TreeNode} root
 * @return {boolean}
 */
var isValidBST = function (root) {
    const dfs = (node, min, max) => {
        if (!node) {
            return true;
        }
        if (node.val >= max || node.val <= min) {
            return false;
        }
        if (node.left && !dfs(node.left, min, node.val)) {
            return false;
        }
        if (node.right && !dfs(node.right, node.val, max)) {
            return false;
        }

        return true;
    }

    return dfs(root, -Infinity, Infinity);
};
// @lc code=end