/*
Statement:
A recruiter plans to hire n people and conducts their interviews at two different locations of the company.
He evaluates the cost of inviting candidates to both these locations.
The plan is to invite 50% at one location, and the rest at the other location, keeping costs to a minimum.
We are given an array, costs, where costs[i]=[aCost i, bCost i], the cost of inviting
the i-th person to City A is aCost i, and the cost of inviting the same person to City B is bCost i.
You need to determine the minimum cost to invite all the candidates for the interview
such that exactly n/2 people are invited in each city.


Test:
[[1,2],[2,1],[1,3],[4,1]]   :   4 ([1,1],[1,1])
[[2,3],[4,1],[3,1],[4,2]]   :   8 ([2,3],[1,2])


Complexity:
T: O(n log n)
S: O(n)
*/

function twoCityScheduling(costs) {
  let minCost = 0;

  costs.sort((a, b) => a[0] - a[1] - (b[0] - b[1]));

  for (let i = 0; i < Math.floor(costs.length / 2); i++) {
    minCost += costs[i][0] + costs[costs.length - i - 1][1];
  }

  return minCost;
}

console.log(
  twoCityScheduling([
    [2, 3],
    [4, 1],
    [3, 1],
    [4, 2],
  ])
);
