/*
Statement:
We are given an array of closed intervals,
intervals, where each interval has a start time and an end time.
The input array is sorted with respect to the start times of each interval.
For example, intervals = [[1,4],[3,6],[7,9]] is sorted in terms of start times 1, 3, and 7.

Your task is to merge the overlapping intervals and return a new output array
consisting of only the non-overlapping intervals.


Test: 
[[1,4],[3,6],[7,9]]     :   [[1,6], [7,9]]


Complexity:
T: O(n)
S: O(1)

export class Interval {
    constructor(start, end) {
        this.start = start;
        this.end = end;
    }
}
*/

function mergeIntervals(intervals) {
    const result = [];
    let last = intervals[0];

    for (const i of intervals) {
        if (intervals[i].start > last.end) {
            result.push(last);
            last = intervals[i];
        } else if (intervals[i].start <= last.end) {
            last.start = Math.min(intervals[i].start, last.start);
            last.end = Math.max(intervals[i].end, last.end);
        }
    }

    result.push(last);
    
    return result;
}