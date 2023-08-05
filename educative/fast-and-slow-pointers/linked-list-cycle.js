/*
Statement: 
Check whether or not a linked list contains a cycle.
If a cycle exists, return TRUE. Otherwise, return FALSE.
The cycle means that at least one node can be reached again by traversing the next pointer.


Test: 
[1,2,3,4,2] -> true
[1,3,3,4,5] -> false


Complexity:
T: O(n)
S: O(1)


class LinkedListNode {
    constructor(data, next = null) {
        this.data = data;
        this.next = next;
    }
}
*/

function detectCycle(head){
    if (!head) {
        return false;
    }

    let slow = head;
    let fast = head.next;

    while (fast && fast.next) {
        if (slow === fast) {
            return true;
        }

        slow = slow.next;
        fast = fast.next.next;
    }
    
    return false;
}