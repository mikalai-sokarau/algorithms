/*
Statement: 
We are given two strings, s and t, find the minimum window substring of t in s.
The minimum window substring of t in s is defined as follows:
* It is the shortest substring of s that includes all of the characters present in t.
* The frequency of each character in this substring that belongs to t should be equal to or greater than its frequency in t.
* The order of the characters does not matter here.

Test: 
adbbcabb, bab           :   abb
adbbddsaaabdab, add     :   ddsa

Complexity:
T: O(m + n) //(s.length + t.length)
S: O(1)
*/

function minWindow(s, t) {
    const result = [0, 0];
    let resultLength = Infinity;
    const requiredLetters = {};
    const windowLetters = {};

    for (let letter of t) {
        requiredLetters[letter] = (requiredLetters[letter] ?? 0) + 1;
        windowLetters[letter] = 0;
    }

    const requiredLength = Object.keys(windowLetters).length;
    let currentLength = 0;
    let right = 0;

    for (let left = 0; left <= s.length; left++) {
        while (currentLength !== requiredLength) {
            if (right > s.length) {
                break;
            }

            if (requiredLetters[s[right]]) {
                windowLetters[s[right]]++;

                if (windowLetters[s[right]] === requiredLetters[s[right]]) {
                    currentLength++;
                }
            }

            right++;
        }

        if (currentLength === requiredLength) {
            if (right - left < resultLength) {
                result[0] = left;
                result[1] = right;
                resultLength = right - left;
            }
        }

        if (requiredLetters[s[left]]) {
            windowLetters[s[left]]--;

            if (windowLetters[s[left]] < requiredLetters[s[left]]) {
                currentLength--;
            }
        }
    }

    return resultLength === Infinity ? '' : s.slice(...result);
}

console.log(minWindow('adbbcabb', 'bab'));
console.log(minWindow('adbbddsaaabdab', 'add'));