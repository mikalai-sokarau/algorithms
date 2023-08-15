/*
Statement:
We’re given a character array, tasks, where each character represents a unique task.
These tasks need to be performed by a single CPU, with each task taking one unit of time.
The tasks can be performed in any order. At any given time, a CPU can either perform some task or stay idle.
For the given tasks, we are also provided with a positive integer value, n,
which represents the cooling period between any two identical tasks.
This means that the CPU must wait for at least n units of time before it performs the same task again.
For example, if we have the tasks [A,B,A,C] and n = 2, then after performing the first A task,
the CPU will wait for at least 2 units of time to perform the second A task.
During these 2 units of time, the CPU can either perform some other task or stay idle.
Given the two input values, tasks and n, find the least number of units of time the CPU will take to perform the given tasks.


Test: 
[A,B,A,C], 2      :   4 (ABCA)
[A,B,A,A], 2      :   7 (AB_A__A)
[A,B,A,A,B,C], 3  :   9 (ABC_AB__A)


Complexity:
T: O(n)
S: O(1)
since there are 26 letters in the English alphabet.
*/

function leastTime(tasks, n) {
  const tasksMap = {};

  for (const task of tasks) {
    tasksMap[task] = (tasksMap[task] ?? 0) + 1;
  }

  const sortedTasks = Object.entries(tasksMap).sort((a, b) => a[1] - b[1]);
  const max = sortedTasks.pop()[1];

  let idle = n * (max - 1);

  while (sortedTasks.length > 0 && idle > 0) {
    idle -= Math.min(max - 1, sortedTasks.pop()[1]);
  }

  idle = Math.max(0, idle);

  return tasks.length + idle;
}

console.log(leastTime(["A", "B", "A", "A", "B", "C"], 3));
