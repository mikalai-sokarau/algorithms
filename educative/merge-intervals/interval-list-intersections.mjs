import { Interval } from '../../data-structures/interval.mjs';
/*
Statement:
For two arrays of closed intervals given as input, intervalListA and intervalListB,
where each interval has its own start and end time,
write a function that returns the intersection of the two interval arrays.
For example, the intersection of [3,8] and [5,10] is [5,8].


Test: 
list1:  [[2,6],[7,9],[10,13],[14,19],[20,24]],
list2:  [[1,4],[6,8],[15,18]]                               
Output: [[2,4],[6,6],[7,8],[15,18]]

list1:  [[1,29]],
list2:  [[1,5],[6,10],[11,14],[15,18],[19,20]]
Output: [[1,5],[6,10],[11,14],[15,18],[19,20]]

Complexity:
T: O(n + m)
S: O(1)

class Interval {
    constructor(start, end) {
        this.start = start;
        this.end = end;
    }
}
*/

function intervalsIntersection(list1, list2) {
    const intersections = [];
    let p1 = 0;
    let p2 = 0;

    while (p1 < list1.length && p2 < list2.length) {
        const start = Math.max(list1[p1].start, list2[p2].start);
        const end = Math.min(list1[p1].end, list2[p2].end);

        if (start <= end) {
            intersections.push(new Interval(start, end));
        }

        list1[p1].end < list2[p2].end ? p1++ : p2++;
    }
    
    return intersections;
}