
/*
T: O(N)
S: O(N)
*/
function removeNthLastNode(head, n) {
    let slow = head;
    let fast = head;

    for (let i = 0; i < n; i++) {
        fast = fast.next;
    }

    if (!fast) {
        return head.next;
    }

    while (fast.next) {
        fast = fast.next;
        slow = slow.next;
    }

    slow.next = slow.next.next;
    
    return head;  
}

/*
Given a singly linked list, remove the nth node from the end of the list and return its head.
*/

// Driver Code
function main() {
    const inputs = [
        [23, 89, 10, 5, 67, 39, 70, 28],
        [34, 53, 6, 95, 38, 28, 17, 63, 16, 76],
        [288, 224, 275, 390, 4, 383, 330, 60, 193],
        [1, 2, 3, 4, 5, 6, 7, 8, 9],
        [69, 8, 49, 106, 116, 112, 104, 129, 39, 14, 27, 12]
    ];

    const n = [4, 1, 6, 9, 11];

    for (let i = 0; i < inputs.length; i++) {
        const inputLinkedList = new LinkedList();
        inputLinkedList.createLinkedList(inputs[i]);
        console.log((i + 1) + ".\tLinked List:\t\t", printListWithForwardArrow(inputLinkedList.head));
        console.log("\tn = " + n[i]);
        let result = removeNthLastNode(inputLinkedList.head, n[i]);
        console.log("\tUpdated Linked List:\t", printListWithForwardArrow(result));
        console.log("-".repeat(100));
    }
}

main();