/*
Statement:
Given the root node of a binary search tree and an integer value k,
return the k-th smallest value in the tree.


Test:



Solution:



Complexity:
T: O(n)
S: O(h) where h is height of the tree
*/
var kthSmallest = function (root, k) {
  let smallest;

  const dfs = (node) => {
    if (!node || smallest) return;

    dfs(node.left);

    k--;
    if (k === 0) smallest = node.data;

    dfs(node.right);
  };

  dfs(root);

  return smallest;
};
