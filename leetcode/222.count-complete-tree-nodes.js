/*
 * @lc app=leetcode id=222 lang=javascript
 *
 * [222] Count Complete Tree Nodes
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
T: O(logN)
S: O(logN)
*/
/**
 * @param {TreeNode} root
 * @return {number}
 */
var countNodes = function(root) {
    if (!root) return 0;

    const height = findHeight(root);

    if (height === 0) {
        return 1;
    }

    const lastLevelLength = 2 ** height - 1;

    let left = 0;
    let right = lastLevelLength;
    
    while (left < right) {
        const indexToCheck = Math.ceil((left + right) / 2);
        const isIndexExist = checkIndex(root, indexToCheck, height);

        if (isIndexExist) {
            left = indexToCheck;
        } else {
            right = indexToCheck - 1;
        }
    }

    return lastLevelLength + left + 1;
};

const checkIndex = (root, index, height) => {
    let current = root;
    let currentHeight = 0;
    let left = 0;
    let right = 2 ** height - 1;

    while (currentHeight < height) {
        const middle = Math.ceil((left + right) / 2);

        if (index >= middle) {
            current = current.right;
            left = middle;
        } else {
            current = current.left;
            right = middle - 1;
        }

        currentHeight++;
    }

    return current !== null;
}

const findHeight = (node) => {
    let height = 0;
    let current = node;

    while (current.left) {
        height++;
        current = current.left;
    }

    return height;
}
// @lc code=end

