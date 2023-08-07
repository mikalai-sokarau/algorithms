/*
Statement:
Given two strings, str1 and str2, find the shortest substring in str1 such that str2 is a subsequence of that substring.
A substring is defined as a contiguous sequence of characters within a string.
A subsequence is a sequence that can be derived from another sequence by deleting zero or more elements
without changing the order of the remaining elements.


Test: 
abcdef, bce         :  bcde
marshmellow, rml    :  rshmel
barsqtagq, aq       :  arsq 
hello, ez           :  ""
hello, ze           :  ""
abcdbebe, bbe       :  bebe

Complexity:
T: O()
S: O()
*/

function minWindow(str1, str2) {
    let start = 0;
    let end = 0;
    let pointer = 0;
    const windows = [];

    while (start < str1.length) {
        if (str1[start] === str2[0]) {
            end = start + 1;
            pointer = 1;
    
            while (end < str1.length && pointer < str2.length) {
                if (str1[end] === str2[pointer]) {
                    pointer++;

                    if (pointer === str2.length) {
                        windows.push(str1.slice(start, end + 1));
                        break;
                    }
                }
                end++;
            }
        }
        start++;
    }

    if (windows.length === 0) {
        return '';
    }

    let min = windows[0];

    for (let i = 0; i < windows.length; i++) {
        if (windows[i].length < min.length) {
            min = windows[i];
        }
    }

    return min;
}

console.log(minWindow('abcdef', 'bce'));
console.log(minWindow('marshmellow', 'rshmel'));
console.log(minWindow('barsqtagq', 'aq'));
console.log(minWindow('hello', 'ez'));
console.log(minWindow('hello', 'ze'));
console.log(minWindow('abcdbebe', 'bbe'));