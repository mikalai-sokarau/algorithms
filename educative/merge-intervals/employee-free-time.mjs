import { MinHeap } from '../../data-structures/heap/min-heap.mjs';
import { Interval } from '../../data-structures/interval.mjs';

/*
Statement:
You’re given a list containing the schedules of multiple employees.
Each person’s schedule is a list of non-overlapping intervals in sorted order.
An interval is specified with the start and end time, both being positive integers.
Your task is to find the list of intervals representing the free time for all the employees.


Test: 
[[[3,5],[8,10]], [[4,6],[9,12]], [[5,6],[8,10]]]      :   [6,8]
[[[1,2],[3,4]], [[2,3]],[[4,6]]]                      :   []


Complexity:
T: O(n + nlog(n)) 
S: O(n)

class Interval {
    constructor(start, end) {
        this.start = start;
        this.end = end;
    }
}
*/

function employeeFreeTime(schedule){
    const heap = new MinHeap([], (a, b) => a.start - b.start);
    const freeTime = [];

    for (const intervals of schedule) {
        for (const i of intervals) {
            heap.offer(i);
        }
    }

    let prev = heap.poll();

    while (heap.size() > 0) {
        const current = heap.poll();

        if (prev.end < current.start) {
            freeTime.push(new Interval(prev.end, current.start));
            prev = current;
        } else if (prev.end < current.end) {
            prev.end = current.end;
        }
    }
    
    return freeTime;
}

const intervals = [[[3,5],[8,10]], [[4,6],[9,12]], [[5,6],[8,10]]]
const schedule = intervals.map(h => h.map(i => new Interval(i[0], i[1])))

console.log(employeeFreeTime(schedule));
