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

// const dfs = (node, min, max) => {
//     if (node === null || node.val === null) {
//         return true;
//     }

//     const isLeftValid = node.left === null
//         || node.left.val === null
//         || (node.left.val < node.val && node.left.val > min);
//     const isRightValid = node.right === null
//         || node.right.val === null
//         || (node.right.val > node.val && node.right.val < max);

//     if (!isLeftValid || !isRightValid) {
//         return false;
//     }

//     return dfs(node.left, min, node.val) && dfs(node.right, node.val, max);
// }
// @lc code=end