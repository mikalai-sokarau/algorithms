/*
Statement:
Given the head of a linked list, the nodes in it are assigned to each group in a sequential manner.
The length of these groups follows the sequence of natural numbers.
Natural numbers are positive whole numbers denoted by 1, (1,2,3,4...).
In other words: The 1 st node is assigned to the first group.
The 2nd and 3rd nodes are assigned to the second group.
The 4th, 5th, and 6th nodes are assigned to the third group, and so on.
Your task is to reverse the nodes in each group with an even number of nodes and return the head of the modified linked list.
Note: The length of the last group may be less than or equal to 1 + the length of the second to the last group.


Test: 
Input: 1 -> 2 -> 3 -> 4 -> 5 -> 6 -> 7 -> 8 -> 9 -> null
Output: 1 -> 3 -> 2 -> 4 -> 5 -> 6 ->  7 -> 8 -> 9 -> null

Input: 1 -> 2 -> 3 -> 4 -> 5 -> 6 -> 7 -> 8 -> 9 -> 10 -> null
Output: 1 -> 3 -> 2 -> 4 -> 5 -> 6 -> 10 -> 9 -> 8 -> 7 -> null

Input: 1 -> 2 -> 3 -> 4 -> 5 -> null
Output: 1 -> 3 -> 2 -> 5 -> 4 -> null


Complexity:
T: O(n)
S: O(1)
*/

function reverseEvenLengthGroups(head) {
    let start = head;
    // starts from the 2nd group since the 1st will never be changed
    let max = 2;
    
    while (start.next) {
        let counter = 0;
        let end = start;

        // traversing through the group
        while (counter < max && end.next) {
            end = end.next;
            counter++;
        }

        // swap nodes if group has even items
        if (counter % 2 === 0) {
            const prevStart = start;
            const prevNext = start.next;
            let next = start.next;

            while (counter > 0) {
                const prev = start;
                start = next;
                next = start.next;
                start.next = prev;
                counter--;
            }

            prevStart.next = start;
            prevNext.next = next;
            start = prevNext;
        } else {
            start = end;
        }
        
        max++;
    }

    return head;
}