import { Heap } from '../../data-structures/heap/heap.mjs';
import { Interval } from '../../data-structures/interval.mjs';

/*
Statement:
You’re given a list containing the schedules of multiple employees.
Each person’s schedule is a list of non-overlapping intervals in sorted order.
An interval is specified with the start and end time, both being positive integers.
Your task is to find the list of intervals representing the free time for all the employees.


Test: 
[[[3,5],[8,10]], [[4,6],[9,12]], [[5,6],[8,10]]]      :   [6,8]
[[[1,2],[5,6]], [[1,3]], [[4,10]]]                    :   [3,4]
[[[1,2],[3,4]], [[2,3]],[[4,6]]]                      :   []


Complexity:
T: O(nlog(k))
S: O(k)
where k is number of employees, n is number of intervals

class Interval {
    constructor(start, end) {
        this.start = start;
        this.end = end;
    }
}
*/

function employeeFreeTime(schedule){
    const heap = new Heap([], (a, b) => a[0] - b[0]);
    const freeTime = [];

    for (let i = 0; i < schedule.length; i++) {
        heap.offer([schedule[i][0].start, i, 0]);
    }

    const [_, firstEmployeeIndex, firstIntervalIndex] = heap.peek()
    let prevEnd = schedule[firstEmployeeIndex][firstIntervalIndex].end;

    while (heap.size() > 0) {
        const [_, eIndex, iIndex] = heap.poll();
        const interval = schedule[eIndex][iIndex];

        if (prevEnd < interval.start) {
            freeTime.push(new Interval(prevEnd, interval.start));
        }

        prevEnd = Math.max(prevEnd, interval.end);

        if (iIndex + 1 < schedule[eIndex].length) {
            heap.offer([schedule[eIndex][iIndex + 1].start, eIndex, iIndex + 1]);
        }
    }
    
    return freeTime;
}

const intervals = [[[3,5],[8,10]], [[4,6],[9,12]], [[5,6],[8,10]]]
const schedule = intervals.map(h => h.map(i => new Interval(i[0], i[1])))

console.log(employeeFreeTime(schedule));
