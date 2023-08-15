/*
Statement:
We are given an input array of meeting time intervals, where each interval has a start time and an end time.
Your task is to find the minimum number of meeting rooms required to hold these meetings.


Test: 
[[1,3],[2,6],[8,10],[9,15],[12,14]]     :   2

Complexity:
T: O(n * m)
S: O(m)
where n - number of intervals, m - number of hours in interval
*/

function findSets(intervals) {
    const hoursMap = {};
    let max = 0;

    for (const [start, end] of intervals) {
        for (let i = start; i < end; i++) {
            hoursMap[i] = (hoursMap[i] ?? 0) + 1;
            max = Math.max(max, hoursMap[i]);
        }
    }

    return max;
}

/*
Complexity:
T: O(nlogn)
S: O(n)
*/
function findSetsOptimal(intervals) {
    const start = [];
    const end = [];
    
    for (const i of intervals) {
        start.push(i[0]);
        end.push(i[1]);
    }

    start.sort((a, b) => a - b);
    end.sort((a, b) => a - b);

    let result = 0;
    let count = 0;
    let s = 0;
    let e = 0;

    
    while (s < intervals.length) {
        if (start[s] < end[e]) {
            s++;
            count++;
        } else {
            e++;
            count--;
        }
        result = Math.max(result, count);
    }

    return result;
}

console.log(findSetsOptimal([[1,3],[2,6],[8,10],[9,15],[12,14]]));