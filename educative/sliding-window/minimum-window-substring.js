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
T: O()
S: O()
*/

function minWindow(s, t) {
    let result = '';
    let resultLength = Infinity;
    const lettersMap = {};

    for (let letter of t) {
        lettersMap[letter] = (lettersMap[letter] ?? 0) + 1;
    }
    
    for (let left = 0; left <= s.length - t.length; left++) {
        if (lettersMap[s[left]]) {
            let lettersCopy = { ...lettersMap };
            let lettersSize = t.length;
            let right = left;

            while (lettersSize > 0) {
                if (right >= s.length) {
                    break;
                }

                if (lettersCopy[s[right]]) {
                    lettersCopy[s[right]]--;
                    lettersSize--;
                }

                right++;
            }

            right--;

            if (lettersSize === 0) {
                lettersCopy = { ...lettersMap };
                lettersSize = t.length;
                left = right;

                while (lettersSize > 0) {
                    if (lettersCopy[s[left]]) {
                        lettersCopy[s[left]]--;
                        lettersSize--;
                    }
    
                    left--;
                }

                left++;
            }

            if (lettersSize === 0 && right + 1 - left < resultLength) {
                result = s.slice(left, right + 1);
                resultLength = result.length;
            }
        }
    }

    return result;
}

console.log(minWindow('adbbcabb', 'bab'));
console.log(minWindow('adbbddsaaabdab', 'add'));