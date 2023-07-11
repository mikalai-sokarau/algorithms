/*
* @lc app=leetcode id=215 lang=javascript
*
* [215] Kth Largest Element in an Array
*/

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
*/
var findKthLargest = function (nums, k) {
    return quickSelect(nums, 0, nums.length - 1, k);
};

var quickSelect = (nums, left, right, k) => {
    const partition = getPartition(nums, left, right);
    
    if (partition > nums.length - k) {
        return quickSelect(nums, left, partition - 1, k);
    } else if (partition < nums.length - k) {
        return quickSelect(nums, partition + 1, right, k);
    }

    return nums[partition];
}

var getPartition = (nums, left, right) => {
    const pivot = nums[Math.floor((left + right) / 2)];
    let l = left;
    let r = right;
    
    while (l <= r) {
        while (nums[l] < pivot) {
            l++;
        }
        while (nums[r] > pivot) {
            r--;
        }
        if (l <= r) {
            swap(nums, l, r);
            l++;
            r--;
        }
    }
    
    return l;
}

var swap = (nums, i, j) => {
    [nums[i], nums[j]] = [nums[j], nums[i]];
}

// @lc code=end

