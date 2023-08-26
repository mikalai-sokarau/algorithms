/*
Statement:
Given an array of k sorted linked lists, your task is to merge them into a single sorted list.


Test: 
[1,3,5],[2,4,6]           :   1 -> 2 -> 3 -> 4 -> 5 -> 6 -> null
[1,8,9],[2,3,4]           :   1 -> 2 -> 3 -> 4 -> 8 -> 9 -> null
[1,3,5],[1,6,9],[2,6,7]   :   1 -> 1 -> 2 -> 3 -> 5 -> 6 -> 6 -> 7 -> 9 - null


Complexity:
T: O(k log n) where k is number of lists, n is number of nodes
S: O(1)

class LinkedListNode {
    constructor(data, next = null) {
        this.data = data;
        this.next = next;
    }
}

*/
function mergeKLists(lists) {
  const dummy = new LinkedListNode(null, lists[0].head);
  let global = dummy;

  for (let i = 1; i < lists.length; i++) {
    let local = lists[i].head;

    while (local) {
      const current = global.next;

      if (!current) {
        global.next = local;
        break;
      }

      if (local.data < current.data) {
        const tmp = local;
        local = local.next;
        global.next = tmp;
        tmp.next = current;
      }

      global = global.next;
    }

    global = dummy;
  }

  return dummy.next;
}
