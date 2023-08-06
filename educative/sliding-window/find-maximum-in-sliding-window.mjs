import { Deque } from '../../data-structures/deque.mjs';

/*
Statement: 
Given an integer list, nums, find the maximum values in all the contiguous subarrays (windows) of size w.


Test: 
[-4, 5, 4, -4, 4, 6, 7, 20], 2  :  [5, 5, 4, 4, 6, 7, 20]
[-4, 5, 4, -4, 4 , 6, 7]        :  [7]
[-4, 5, 4, -4, 4, 6, 7], 10     :  [7]


Complexity:
T: O(n)
S: O(w)
*/

function findMaxSlidingWindow(nums, w) {
    const queue = new Deque();
    const result = [];

    for (let i = 0; i < w; i++) {
        cleanUp(i, nums, queue);

        queue.push(i);
    }

    result.push(nums[queue.peekFront()]);

    for (let i = w; i < nums.length; i++) {
        cleanUp(i, nums, queue);

        if (queue.peekFront() <= i - w) {
            queue.shift();
        }

        queue.push(i);
        result.push(nums[queue.peekFront()]);
    }

    return result;
}

function cleanUp(index, nums, queue) {
    while (nums[index] >= nums[queue.peekBack()]) {
        queue.pop();
    }
}

console.log(findMaxSlidingWindow([-4, 5, 4, -4, 4, 6, 7, 20], 2));
console.log(findMaxSlidingWindow([-4, 5, 4, -4, 4, 6, 7], 7));
console.log(findMaxSlidingWindow([-4, 5, 4, -4, 4, 6, 7], 10));

/*
Naive approach:
T: O(n * w) n - nums.length, w - window size
S: O(w)
*/
function findMaxSlidingWindowNaive(nums, w) {
    const window = nums.slice(0, w);
    const result = [];

    for (let left = 0, right = w - 1; right < nums.length; left++) {
        result.push(Math.max(...window));
        window.shift();
        right++;
        window.push(nums[right]);
    }

    return result;
}

