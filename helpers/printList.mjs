export const printList = (linkedListNode) => {
  let node = linkedListNode;
  let result = '';

  while (node) {
    result += node.data;
    node = node.next;
    result += node ? ' → ' : ' → null';
  }

  console.log(result);
}
