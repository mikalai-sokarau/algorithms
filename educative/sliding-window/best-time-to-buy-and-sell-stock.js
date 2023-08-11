/*
Statement:
Given an array where the element at the index i represents the price of a stock on day i,
find the maximum profit that you can gain by buying the stock once and then selling it.

Note: Stock can only be purchased on a single day and sold on a different day.
If no profit can be achieved, we return zero.


Test:
[4,3,5,2,9,6,9,1]       : 7
[9,7,5,3,2,1]           : 0
[2,2,2,2]               : 0


Complexity:
T: O(n)
S: O(1)
*/

function maxProfit(stockPrices) {
    let maxSum = 0;

    for (let start = 0, end = 1; end < stockPrices.length; end++) {
        if (stockPrices[end] < stockPrices[start]) {
            start = end;
        }
        
        if (start < end) {
            maxSum = Math.max(maxSum, stockPrices[end] - stockPrices[start]);
        }
    }

    return maxSum;
}

console.log(maxProfit([4,3,5,2,9,6,9,1]));
console.log(maxProfit([9,7,5,3,2,1]));
console.log(maxProfit([2,2,2,2]));