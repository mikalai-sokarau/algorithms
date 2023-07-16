/*
 * @lc app=leetcode id=102 lang=javascript
 *
 * [102] Binary Tree Level Order Traversal
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
 * @return {number[][]}
 */
var levelOrder = function(root) {
    if (root === null) {
        return [];
    }

    const queue = [root];
    const result = [];
    let level = [];
    let counter = queue.length;

    while (queue.length) {
        const current = queue.shift();

        if (current.left) {
            queue.push(current.left);
        }
        if (current.right) {
            queue.push(current.right);
        }

        counter--;
        level.push(current.val);

        if (counter === 0) {
            result.push(level);
            level = [];
            counter = queue.length;
        }
    }

    return result;
};
// @lc code=end

