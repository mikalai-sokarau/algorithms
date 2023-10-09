/*
Statement:
You’re given a nested list of integers. Each element is either an integer or a list
whose elements may also be integers or other integer lists.
Your task is to implement an iterator to flatten the nested list.

You will have to implement the Nested Iterator class. This class has the following functions:

* constructor: This initializes the iterator with the nested list.
* next (): This returns the next integer in the nested list.
* hasNext (): This returns TRUE if there are still some integers in the nested list.
Otherwise, it returns FALSE.


Test:


Complexity:
constructor:
T: O(n)
S: O(1)
hasNext:
T: O(n)
S: O(1)
next:
T: O(n)
S: O(1)
*/

var NestedIterator = function (nestedList) {
  this.stack = [];

  for (let i = nestedList.length - 1; i >= 0; i--) {
    this.stack.push(nestedList[i]);
  }
};

NestedIterator.prototype.hasNext = function () {
  while (this.stack.length && !this.stack[this.stack.length - 1].isInteger()) {
    const top = this.stack.pop();
    const list = top.getList();

    for (let i = list.length - 1; i >= 0; i--) {
      this.stack.push(list[i]);
    }
  }

  return this.stack.length > 0;
};

NestedIterator.prototype.next = function () {
  if (this.hasNext()) {
    return this.stack.pop().getInteger();
  }

  return null;
};
