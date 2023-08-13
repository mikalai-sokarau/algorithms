/*
Statement: 
Convert max heap to min heap.

Test: 
[9,4,7,1,-2,6,5]            :   [-2,1,5,9,4,6,7]
[16,15,14,12,4,7,9,2,3,1]   :   [1,2,7,3,4,14,9,12,16,15]

Complexity:
T: O(n)
S: O(log(n))

child -> parent: Math.floor((index - 1) / 2);
parent -> left: index * 2 + 1
parent -> right: index * 2 + 2
*/

function heapify(heap, i) {
    const left = 2 * i + 1;
    const right = left + 1;
    let min = i;

    if (left < heap.length && heap[left] > heap[min]) {
        min = left;
    }

    if (right < heap.length && heap[right] > heap[min]) {
        min = right;
    }

    if (min !== i) {
        [heap[i], heap[min]] = [heap[min], heap[i]];
        heapify(heap, min);
    }
}

function convertMax(maxHeap) {
    let i = Math.floor(maxHeap.length / 2);

    while (i >= 0) {
        heapify(maxHeap, i);
        i--;
    }

    return maxHeap;
}

console.log(convertMax([9,4,7,1,-2,6,5]));
console.log(convertMax([16,15,14,12,4,7,9,2,3,1]));
