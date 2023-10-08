/*
Statement:
We are given an integer number, n, representing the number of functions running in a single-threaded CPU,
and an execution log, which is essentially a list of strings.
Each string has the format {function id}:{"start" | "end"}:{timestamp},
indicating that the function with function id either started or stopped execution at the time identified by the timestamp value.
Each function has a unique ID between 0 and n−1.
Compute the exclusive time of the functions in the program.

Note: The exclusive time is the sum of the execution times for all the calls to a specific function.


Test:
1, ['0:start:0','0:start:2','0:end:5','0:start:6','0:end:6','0:end:7']  :  [8]
3, ['0:start:1','1:start:2','2:start:3','2:end:4','1:end:5','0:end:6']  :  [2,2,2]


Complexity:
T: O(n)
S: O(n)
*/

function exclusiveTime(n, events) {
  const result = new Array(n).fill(0);
  const stack = [];

  for (const curr of events) {
    if (curr.event === 'start') {
      stack.push(curr);
    } else {
      const idle = curr.time - stack.pop().time + 1;

      result[curr.id] += idle;

      if (stack.length) {
        const last = stack[stack.length - 1];

        result[last.id] -= idle;
      }
    }
  }

  return result;
}

class Log {
  constructor(content) {
    const [id, event, time] = content.split(':');

    this.id = Number(id);
    this.event = event;
    this.time = Number(time);
  }
}

const logs1 = [
  '0:start:0',
  '0:start:2',
  '0:end:5',
  '0:start:6',
  '0:end:6',
  '0:end:7',
].map((l) => new Log(l));

const logs2 = [
  '0:start:1',
  '1:start:2',
  '2:start:3',
  '2:end:4',
  '1:end:5',
  '0:end:6',
].map((l) => new Log(l));

console.log(exclusiveTime(1, logs1)); // [8]
console.log(exclusiveTime(3, logs2)); // [2,2,2]
