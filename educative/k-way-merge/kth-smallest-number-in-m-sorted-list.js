/*
Statement:
Given an m number of sorted lists in ascending order and an integer, k, find the k th smallest number among all the given lists.
Although there can be repeating values in the lists, each element is considered unique and, therefore,
contributes to calculating the k th smallest element.
If k is greater than the total number of elements in the input lists, return the greatest element from all the lists,
and if there are no elements in the input lists, return 0.


Test: 
[[4,5,6],[1,2,3],[7,8,9]], 4    :   4
[[],[]], 5                      :   0
[[1,2],[3,4]], 6                :   4


Complexity:
T: O((n + k) log n) where n is number of items in all the lists, k is an argument.
S: O(n)
*/

import { MinHeap } from '../../data-structures/heap/min-heap.mjs';

function kSmallestNumber(lists, k){
    const heap = new MinHeap();
    let result = 0;

    for (const list of lists) {
        for (const item of list) {
            heap.offer(item);
        }
    }

    let i = 0;

    while (i < k && heap.size()) {
        result = heap.poll();
        i++;
    }
    
    return result;
}