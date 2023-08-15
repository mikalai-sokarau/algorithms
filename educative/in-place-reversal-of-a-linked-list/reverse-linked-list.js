/*
Statement: 
Given the head of a singly linked list, reverse the linked list and return its updated head.


Test: 
1 -> 2 -> 3 -> 4 -> 5   :   5 -> 4 -> 3 -> 2 -> 1


Complexity:
T: O(n)
S: O(1)
*/

export function reverse(head) {
    let prev = null;
    let curr = head;
    
    while (curr.next) {
        const next = curr.next;
        curr.next = prev;
        prev = curr;
        curr = next;
    }

    curr.next = prev;

    return curr;
}