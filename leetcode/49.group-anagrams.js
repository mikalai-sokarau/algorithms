/*
 * @lc app=leetcode id=49 lang=javascript
 *
 * [49] Group Anagrams
 */
/*
T: O(n * m * log m)
S: O(n + m)
Technique: hash map + merge sort
*/
// @lc code=start
/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function (strs) {
    const store = {};

    for (s of strs) {
        const sorted = mergeSort(s.split('')).join('');

        if (!store[sorted]) {
            store[sorted] = [];
        }

        store[sorted].push(s);
    }

    return Object.values(store);
};

/**
 * @param {string[]} chars
 * @return {string}
 */
var mergeSort = (chars) => {
    if (chars.length < 2) {
        return chars;
    }

    const middle = Math.floor(chars.length / 2);
    const sortedLeft = mergeSort(chars.slice(0, middle));
    const sortedRight = mergeSort(chars.slice(middle));

    return mergeArrays(sortedLeft, sortedRight);
}

/**
 * @param {string[]} left
 * @param {string[]} right
 * @return {string[]}
 */
var mergeArrays = (left, right) => {
    const merged = [];

    while (left.length && right.length) {
        if (left[0] < right[0]) {
            merged.push(left.shift());
        } else {
            merged.push(right.shift());
        }
    }

    while (left.length) {
        merged.push(left.shift());
    }
    while (right.length) {
        merged.push(right.shift());
    }

    return merged;
}
// @lc code=end