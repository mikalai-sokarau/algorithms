/*
Statement:
Given two arrays and an integer k, find k pairs of numbers with the smallest sum
so that in each pair, each array contributes one number to the pair.
Constraints:
- Input arrays should be sorted in ascending order.
- If the value of k exceeds the total number of valid pairs that may be formed, return all the pairs.


Test: 
[1,2,3,4], [1,2,3,4], 4       :   [[1,1],[1,2],[2,1],[2,2]]

Complexity:
T: O((m + k) log n)  where m is min(k, list1.length)
S: O(m)
*/

import { MinHeap } from '../../data-structures/heap/min-heap.mjs';

export function kSmallestPairs(list1, list2, k){
    const smallestPairsHeap = new MinHeap([], (a, b) => a[0] - b[0]);
    const result = [];
    
    for (let i = 0; i < Math.min(k, list1.length); i++) {
        smallestPairsHeap.offer([list1[i] + list2[0], i, 0])
    }

    while (smallestPairsHeap.size()) {
        if (result.length >= k) {
            break;
        }

        const [_, i1, i2] = smallestPairsHeap.poll();
        const next = i2 + 1;
        
        result.push([list1[i1], list2[i2]]);

        if (next < list2.length) {
            smallestPairsHeap.offer([list1[i1] + list2[next], i1, next]);
        }
    }

    return result;
}