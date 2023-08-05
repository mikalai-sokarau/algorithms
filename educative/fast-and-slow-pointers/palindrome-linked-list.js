/*
Statement: 
Given the head of a linked list, your task is to check whether the linked list is a palindrome or not.
Return TRUE if the linked list is a palindrome; otherwise, return FALSE.

Test: 
1 -> 2 -> 3 -> 2 -> 1 -> null           :  true
1 -> 2 -> 3 -> 4 -> 1 -> null           :  false
1 -> 2 -> 3 -> 3 -> 2 -> 1 -> null      :  true
1 -> 2 -> 3 -> 4 -> 2 -> 1 -> null      :  false

Complexity:
T: O(n)
S: O(1)
*/

function palindrome(head){
    if (!head) {
        return true;
    }

    let slow = head;
    let fast = head;
    let prev = null;

    while (fast && fast.next) {
        fast = fast.next.next;

        const next = slow.next;
        slow.next = prev;
        prev = slow;
        slow = next;
    }

    fast = fast ? slow.next : slow;
    slow = prev;

    while (fast) {
        if (fast.data !== slow.data) {
            return false;
        }

        fast = fast.next;
        slow = slow.next;
    }

    return true;
}
