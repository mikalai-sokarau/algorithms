/*
 * @lc app=leetcode id=1376 lang=javascript
 *
 * [1376] Time Needed to Inform All Employees
 */

// @lc code=start
/**
 * @param {number} n
 * @param {number} headID
 * @param {number[]} manager
 * @param {number[]} informTime
 * @return {number}
 */
/*
T: O(N)
S: O(N)
*/
var numOfMinutes = function(n, headID, manager, informTime) {
    return dfs(getImployees(n, manager), headID, informTime);
};

var dfs = (employees, currentID, time) => {
    if (!employees[currentID]) {
        return 0;
    }

    let maxTime = 0;

    for (let emp of employees[currentID]) {
        maxTime = Math.max(maxTime, dfs(employees, emp, time));
    }

    return time[currentID] + maxTime;
}

var getImployees = (n, manager) => {
    const employees = [];

    for (let e = 0; e < n; e++) {
        const m = manager[e];
        
        if (m < 0) {
            continue;
        }
        if (!employees[m]) {
            employees[m] = [];
        };

        employees[m].push(e);
    }

    return employees;
}
// @lc code=end