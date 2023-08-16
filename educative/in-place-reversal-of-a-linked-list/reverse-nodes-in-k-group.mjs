import { LinkedList } from '../../data-structures/linked-list.mjs';
import { printList } from '../../helpers/printList.mjs';

/*
Statement: 
The task is to reverse the nodes in groups of k in a given linked list, where k is a positive integer,
and at most the length of the linked list. If any remaining nodes are not part of a group of k,
they should remain in their original order.
It is not allowed to change the values of the nodes in the linked list.
Only the order of the nodes can be modified.
Note: Use only O(1) extra memory space.


Test: 
1 -> 2 -> 3 -> 4 -> 5 -> null, 3    :   3 -> 2 -> 1 -> 4 -> 5 -> null
1 -> 2 -> 3 -> 4 -> 5 -> null, 2    :   2 -> 1 -> 4 -> 3 -> 5 -> null
1 -> 2 -> 3 -> 4 -> 5 -> null, 1    :   1 -> 2 -> 3 -> 4 -> 5 -> null


Complexity:
T: O(n)
S: O(1)
*/

export function reverseKGroups(head, k) {
    if (k < 2) {
        return head;
    }

    let newHead = null;
    let reversedTail = head;
    let start = head;
    let end = head;

    while (end) {
        let counter = 0;
        
        while (end && counter < k - 1) {
            end = end.next;
            counter++;
        }

        if (!end) {
            break;
        }

        end = start;

        let next = end.next;
        
        while (counter > 0) {
            const prev = end;
            end = next;
            next = end.next;
            end.next = prev;
            counter--;
        }

        if (!newHead) {
            newHead = end;
        }

        reversedTail.next = end;
        reversedTail = start;
        start.next = next;
        start = next;
        end = next;
    }

    return newHead ?? head;
}

const list = new LinkedList();

list.createLinkedList([1,2,3,4,5]);
printList(reverseKGroups(list.head, 2));
