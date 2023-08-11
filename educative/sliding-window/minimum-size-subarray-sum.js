/*
Statement:
Given an array of positive integers, nums, and a positive integer, target,
find the minimum length of a contiguous subarray whose sum is greater than or equal to the target.
If no such subarray is found, return 0.


Test: 
[1,2,3,1,2,4,1,5,2], 7      :   2 (5, 2)
[1,2,3,1,2,4,1,5,2], 10     :   3 (4, 1, 5)
[1,2,3,1,2,4,1,5,2], 4      :   1 (4 / 5)
[1,1,1,1,1], 6              :   0


Complexity:
T: O(n)
S: O(1)
*/

function minSubArrayLen(target, nums) {
    let minLength = Infinity;
    let currentSum = 0;
    let end = 0;
    let start = 0;

    while (end < nums.length) {
        currentSum += nums[end];
        end++;

        while (currentSum >= target) {
            minLength = Math.min(end - start, minLength);
            currentSum -= nums[start];
            start++;
        }
    }

    return minLength === Infinity ? 0 : minLength;
}

console.log(minSubArrayLen(7, [1,2,3,1,2,4,1,5,2]));
console.log(minSubArrayLen(10, [1,2,3,1,2,4,1,5,2]));
console.log(minSubArrayLen(4, [1,2,3,1,2,4,1,5,2]));
console.log(minSubArrayLen(6, [1,1,1,1,1]));
