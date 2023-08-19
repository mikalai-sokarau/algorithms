/*
Statement:
Given the head of a singly linked list, reorder the list as if it were folded on itself.
For example, if the list is represented as follows:
1 -> 2 -> 3 -> 4 -> 5 -> 6 -> null
This is how you’ll reorder it:
1 -> 6 -> 2 -> 5 -> 3 -> 4 -> null
You don’t need to modify the values in the list’s nodes; only the links between nodes need to be changed.


Test: 
1 -> 2 -> 3                  :   1 -> 3 -> 2
1 -> 2 -> 3 -> 4 -> 5        :   1 -> 5 -> 2 -> 4 -> 3
1 -> 2 -> 3 -> 4 -> 5 -> 6   :   1 -> 6 -> 2 -> 5 -> 3 -> 4
1 -> 2                       :   1 -> 2


Complexity:
T: O(n)
S: O(1)
*/

function reorderList(head) {
    let slow = head;
    let fast = head;

    // looking for the middle of the list
    while (fast && fast.next) {
        slow = slow.next;
        fast = fast.next.next;
    }

    fast = slow;

    // reversing of a second half
    let next = fast.next;
    while (next) {
        const prev = fast;
        fast = next;
        next = fast.next;
        fast.next = prev;
    }
    
    slow.next = null;
    slow = head;

    // reorder list nodes
    while (fast.next) {
        next = slow.next;
        slow.next = fast;
        fast = fast.next;
        slow = slow.next;
        slow.next = next;
        slow = slow.next;
    }

    return head;
}
