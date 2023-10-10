/*
Statement:
Design a custom queue, MyQueue, using only two stacks.
Implement the Push(), Pop(), Peek(), and Empty() methods:
Void Push(int x): Pushes element at the end of the queue.
Int Pop(): Removes and returns the element from the front of the queue.
Int Peek(): Returns the element at the front of the queue.
Boolean Empty(): Returns TRUE if the queue is empty. Otherwise FALSE.
You are required to only use the standard stack operations,
which means that only the Push() to top,
Peek() and Pop() from the top,
Size(), and Is Empty() operations are valid.

Note: In some interview questions, Void Push(int x) and Int Pop() might be referred to
as Void Enqueue(int x) and Int Dequeue(), respectively.


Test:
push(1), push(2), peek(), pop(), pop(), empty(), push(3), empty() : [1,2,1,1,2,true,3,false]


Complexity:
push:
T: O(1)
S: O(1)
pop:
T: O(n)
S: O(n)
peek:
T: O(n)
S: O(n)
empty:
T: O(1)
S: O(1)
*/

class MyQueue {
  constructor() {
    this.stack1 = [];
    this.stack2 = [];
  }

  push(x) {
    this.stack2.push(x);
  }

  pop() {
    this.peek();

    if (!this.stack1.length) {
      return null;
    }

    return this.stack1.pop();
  }

  peek() {
    if (!this.stack1.length) {
      while (this.stack2.length) {
        this.stack1.push(this.stack2.pop());
      }
    }

    return this.stack1[this.stack1.length - 1];
  }

  empty() {
    return this.stack1.length === 0 && this.stack2.length === 0;
  }
}
