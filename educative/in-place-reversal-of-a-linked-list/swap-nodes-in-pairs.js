/*
Statement:
Given a singly linked list, swap every two adjacent nodes of the linked list.
After the swap, return the head of the linked list.

Note: Solve the problem without modifying the values in the list’s nodes.
In other words, only the nodes themselves can be changed.


Test: 
1 -> 2 -> 3 -> 4 -> 5 -> 6 -> null  :   2 -> 1 -> 4 -> 3 -> 6 -> 5 -> null
1 -> 2 -> 3 -> null                 :   2 -> 1 -> 3 -> null
1 -> null                           :   1 -> null
1 -> 2 -> 3 -> 4 -> null            :   2 -> 1 -> 4 -> 3 -> null


Complexity:
T: O(n)
S: O(1)
*/

function swapPairs(head){
    if (!head || !head.next) {
        return head;
    }

    const dummy = new LinkedListNode(null, head);
    let current = dummy;

    while (current.next && current.next.next) {
        const next1 = current.next;
        const next2 = current.next.next;

        current.next = next2;
        next1.next = next2.next;
        next2.next = next1;
        current = current.next.next;
    }
    
    return dummy.next;
}