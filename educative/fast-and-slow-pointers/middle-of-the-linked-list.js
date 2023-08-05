/*
Statement:
Given the head of a singly linked list, return the middle node of the linked list.
If the number of nodes in the linked list is even, there will be two middle nodes, so return the second one.


Test: 
1 -> 2 -> 3 -> 4 -> 5 -> null  :  3
1 -> 2 -> 3 -> 4 -> 5 -> 6 -> null  :  4

Complexity:
T: O(n)
S: O(1)
*/

function getMiddleNode(head){
    let slow = head;
    let fast = head.next;

    while (fast) {
        slow = slow.next;
        fast = fast.next;

        if (fast) {
            fast = fast.next;
        }
    }

    return slow;
}

class LinkedListNode {
    constructor(data, next = null) {
        this.data = data;
        this.next = next;
    }
}

function createLinkedList(input) {
    let head = new LinkedListNode(input[0]);
    let current = head;

    for (let i = 1; i < input.length; i++) {
        const newLLItem = new LinkedListNode(input[i]);

        current.next = newLLItem;
        current = newLLItem;
    }

    return head;
}


const head1 = createLinkedList([1, 2, 3, 4, 5]);
const head2 = createLinkedList([1, 2, 3, 4, 5, 6]);

console.log(getMiddleNode(head1).data);
console.log(getMiddleNode(head2).data);