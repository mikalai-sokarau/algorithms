/*
 * @lc app=leetcode id=133 lang=javascript
 *
 * [133] Clone Graph
 */

// @lc code=start
/**
 * // Definition for a Node.
 * function Node(val, neighbors) {
 *    this.val = val === undefined ? 0 : val;
 *    this.neighbors = neighbors === undefined ? [] : neighbors;
 * };
 */
/*
Complexity:
T: O(n + m) - where n is the number of nodes and m is the number of edges
S: O(n)
*/

/**
 * @param {Node} node
 * @return {Node}
 */
var cloneGraph = function (root) {
  if (!root) {
    return root;
  }

  return cloneNeighbors(root, new Map());
};

function cloneNeighbors(node, cloned) {
  let clonedNode = cloned.get(node.val);

  if (!clonedNode) {
    clonedNode = new Node(node.val);

    cloned.set(node.val, clonedNode);

    for (const n of node.neighbors) {
      const clonedNeighbor = cloneNeighbors(n, cloned);

      clonedNode.neighbors.push(clonedNeighbor);
    }
  }

  return clonedNode;
}
// @lc code=end
