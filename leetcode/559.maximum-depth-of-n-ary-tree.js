/*
 * @lc app=leetcode id=559 lang=javascript
 *
 * [559] Maximum Depth of N-ary Tree
 */

// @lc code=start
/**
 * // Definition for a Node.
 * function Node(val,children) {
 *    this.val = val;
 *    this.children = children;
 * };
 */
/*
Complexity:
T: O(n)
S: O(log h) where h is the height of the tree
*/
/**
 * @param {Node|null} root
 * @return {number}
 */
var maxDepth = function (root) {
  let max = 0;

  const dfs = (node, level) => {
    if (!node) return;
    if (level > max) max = level;

    for (const c of node.children) {
      dfs(c, level + 1);
    }
  };

  dfs(root, 1);

  return max;
};
// @lc code=end
