/*
Statement:
A thief has discovered a new neighborhood to target, where the houses can be represented as nodes in a binary tree.
The money in the house is the data of the respective node.
The thief can enter the neighborhood from a house represented as root of the binary tree.
Each house has only one parent house. The thief knows that if he robs two houses that are directly connected,
the police will be notified. The thief wants to know the maximum amount of money he can steal from the houses
without getting caught by the police. The thief needs your help determining the maximum amount of money
he can rob without alerting the police.


Test:
[1, 2,3, 4,5,6,7]                 :   23 (1,4,5,6,7)
[1, 7,3, 1,0,6,7]                 :   20 (7,6,7)
[3, 2,3, null,3,null,1]           :    7 (3,3,1)


Complexity:
T: O(n)
S: O(n)

class TreeNode {
  constructor(data) {
    this.data = data;
    this.left = null;
    this.right = null;
  }
}
*/

export function rob(root) {
  const [withRoot, withoutRoot] = robHouse(root);

  return Math.max(withRoot, withoutRoot);
}

function robHouse(house) {
  if (!house) {
    return [0, 0];
  }

  const leftNeighbor = robHouse(house.left);
  const rightNeighbor = robHouse(house.right);
  const withCurrent = house.data + leftNeighbor[1] + rightNeighbor[1];
  const withoutCurrent = Math.max(...leftNeighbor) + Math.max(...rightNeighbor);

  return [withCurrent, withoutCurrent];
}
