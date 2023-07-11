/*
 * @lc app=leetcode id=844 lang=javascript
 *
 * [844] Backspace String Compare
 */

// @lc code=start
/*
T: O(N)
S: O(1)
technique: two pointers
*/
/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var backspaceCompare = function (s, t) {
    let pS = s.length - 1;
    let pT = t.length - 1;

    while (pS >= 0 || pT >= 0) {
        pS = findNextCharIndex(s, pS);
        pT = findNextCharIndex(t, pT);

        if (s[pS] !== t[pT]) {
            return false;
        }

        pS--;
        pT--;
    }

    return true;
};

const findNextCharIndex = (str, index) => {
    let hashesFound = 0;

    for (let i = index; i >= 0; i--) {
        if (str[i] === '#') {
            hashesFound++;
        } else if (hashesFound > 0) {
            hashesFound--;
        } else {
            return i;
        }
    }

    return -1;
}
/*
    not optimal
    time: O(n)
    space: O(n)
    technique: brute force
*/
/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
// var backspaceCompare = function(s, t) {
//     const finalS = buildString(s);
//     const finalT = buildString(t);

//     return finalS === finalT;
// };

// const buildString = (str) => {
//     let finalString = [];
//     let charsToDelete = 0;

//     for (let i = str.length - 1; i >= 0; i--) {
//         if (str[i] === '#') {
//             charsToDelete++;
//         } else if (charsToDelete > 0) {
//             charsToDelete--;
//         } else {
//             finalString.push(str[i]);
//         }
//     }

//     return finalString.join('');
// }
// @lc code=end

