import { LinkedListNode } from '../../data-structures/linked-list.mjs'

/*
Statement: 
Given the linked list and an integer, k,
return the head of the linked list after swapping the values of the k-th node from the beginning
and the k-th node from the end of the linked list.
Note: We’ll number the nodes of the linked list starting from 1 to n.


Test:
1 -> 2 -> 3 -> 4 -> 5 -> null, 2         :   1 -> 4 -> 3 -> 2 -> 5 -> null
1 -> 2 -> 3 -> null, 3                   :   3 -> 2 -> 1 -> null
1 -> 2 -> 3 -> null, 2                   :   1 -> 2 -> 3 -> null
1 -> 2 -> 3 -> 4 -> 5 -> 6 -> null, 3    :   1 -> 2 -> 4 -> 3 -> 5 -> 6 -> null


Complexity:
T: O(n)
S: O(1)
*/

function swapNodes(head, k) {
    const dummy = new LinkedListNode(null, head);
    let rightPrev = dummy;
    let leftPrev = dummy;
    
    // looking for the index of the node prev to right
    for (let i = 1; i < k; i++) {
        rightPrev = rightPrev.next;
    }
    
    let right = rightPrev.next;

    // looking for the index of the node prev to left
    while (right.next) {
        leftPrev = leftPrev.next;
        right = right.next;
    }

    // change nodes with each other
    right = rightPrev.next;
    const left = leftPrev.next;
    const rightNext = right.next;

    leftPrev.next = right;
    right.next = left.next;
    rightPrev.next = left;
    left.next = left === rightNext ? right : rightNext;
    
    return dummy.next;
}


