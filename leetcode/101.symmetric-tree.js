/*
 * @lc app=leetcode id=101 lang=javascript
 *
 * [101] Symmetric Tree
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
 * @param {TreeNode} root
 * @return {boolean}
 */
/*
T: O(N)
S: O(N)
*/
var isSymmetric = function(root) {
    var checkIfSymetric = (left, right) => {
        if (!left && !right) {
            return true;
        }
        if (!left || !right) {
            return false;
        }

        return left.val === right.val
            && checkIfSymetric(left.right, right.left)
            && checkIfSymetric(left.left, right.right)
    }

    return checkIfSymetric(root.left, root.right);
};

// var isSymmetric = function(root) {
//     const queue = [root.left, root.right]

//     while (queue.length) {
//         const currentL = queue.shift();
//         const currentR = queue.shift();

//         if (!currentL && !currentR) {
//             continue;
//         }
//         if (!currentL || !currentR || currentL.val !== currentR.val) {
//             return false;
//         }

//         queue.push(currentL.left, currentR.right, currentL.right, currentR.left);
//     }
    
//     return true;
// };
// @lc code=end

