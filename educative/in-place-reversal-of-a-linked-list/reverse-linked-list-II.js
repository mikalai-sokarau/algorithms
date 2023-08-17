/*
Statement: 
Given a singly linked list with n nodes and two positions, left and right,
the objective is to reverse the nodes of the list from left to right.
Return the modified list.

Test: 
1 -> 2 -> 3 -> 4 -> 5 -> null, 2, 4        :   1 -> 2 -> 5 -> 4 -> 3 -> null
1 -> 2 -> 3 -> 4 -> 5 -> null, 1, 5        :   5 -> 4 -> 3 -> 2 -> 1 -> null

Complexity:
T: O(n)
S: O(1)
*/

function reverseBetween(head, left, right) {
    let current = head;
    let leftPrev = head;
    let counter = 1;
    let newHead = head;

    while (counter < left) {
        leftPrev = current;
        current = current.next;
        counter++;
    }

    let next = current.next;
    const rightPrev = current;

    while (counter < right) {
        const prev = current;
        current = next;
        next = current.next;
        current.next = prev;
        counter++;
    }

    rightPrev.next = next;

    if (left === 1) {
        newHead = current;
    } else {
        leftPrev.next = current;
    }
    
    return newHead;
}