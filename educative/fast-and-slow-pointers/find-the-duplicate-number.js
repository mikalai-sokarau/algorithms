/*
Statement: Given an unsorted array of positive numbers, nums, such that the values lie in the range [1,n], inclusive,
and that there are n+1 numbers in the array, find and return the duplicate number present in nums.
There is only one repeated number in nums.


Test: 
[1, 2, 3, 4, 3, 5]  :  3
[1, 2, 3, 4, 5, 2]  :  2


Complexity:
T: O(n)
S: O(1)
*/

function findDuplicate(nums){
    let slow = 0;
    let fast = 0;

    do {
        slow = nums[slow];
        fast = nums[nums[fast]];
    } while (slow !== fast)

    slow = 0;

    while (slow !== fast) {
        slow = nums[slow];
        fast = nums[fast];
    }

    return fast;
}

console.log(findDuplicate([1, 2, 3, 4, 4, 5]));
console.log(findDuplicate([1, 2, 3, 4, 5, 2]));

