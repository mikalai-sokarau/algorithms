/*
Statement:
Given a sorted list of nonoverlapping intervals and a new interval,
your task is to insert the new interval into the correct position while ensuring
that the resulting list of intervals remains sorted and nonoverlapping.
Each interval is a pair of nonnegative numbers, the first being the start time
and the second being the end time of the interval.


Test: 
[[1,3],[4,6],[9,11],[13,17]], [7,8]     :       [[1,3],[4,6],[7,8],[9,11],[13,17]]
[[1,3],[4,6],[7,11],[13,17]], [5,8]     :       [[1,3],[4,8],[9,11],[13,17]]
[[1,3],[4,6]], [7,11]                   :       [[1,3],[4,6],[7,11]]

Complexity:
T: O(n)
S: O(1)

class Interval {
    constructor(start, end) {
        this.start = start;
        this.end = end;
    }
}
*/

function insertInterval(intervals, newInterval){
    const result = [];
    let index = 0;

    while (index < intervals.length) {
        if (intervals[index].end >= newInterval.start) {
            newInterval.start = Math.min(newInterval.start, intervals[index].start);
            result.push(newInterval);
            break;
        }

        result.push(intervals[index]);
        index++;
    }

    while (index < intervals.length) {
        const last = result[result.length - 1];

        if (last.end >= intervals[index].start) {
            last.end = Math.max(intervals[index].end, last.end);
        } else {
            result.push(intervals[index]);
        }

        index++;
    }

    if (intervals.length === result.length) {
        result.push(newInterval);
    }
    
    return result;
}
