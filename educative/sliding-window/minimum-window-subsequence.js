/*
Statement:
Given two strings, str1 and str2, find the shortest substring in str1 such that str2 is a subsequence of that substring.
A substring is defined as a contiguous sequence of characters within a string.
A subsequence is a sequence that can be derived from another sequence by deleting zero or more elements
without changing the order of the remaining elements.


Test: 
abcdef, bce         :  bcde
marshmellow, rml    :  rshmel
barsqtagq, aq       :  agq 
hello, ez           :  ""
hello, ze           :  ""
abcdbebe, bbe       :  bebe

Complexity:
T: O(n * m)
S: O(1)
*/

function minWindow(str1, str2) {
    let start = 0;
    let end = 0;
    let pointer = 0;
    let min = '';
    let minLength = Infinity;

    while (start < str1.length) {
        if (str1[start] === str2[pointer]) {
            pointer++;

            if (pointer === str2.length) {
                end = start;
                pointer--;
    
                while (pointer >= 0) {
                    if (str1[start] === str2[pointer]) {
                        pointer--;
                    }
                    start--;
                }

                start++;
                
                if (end - start + 1 < minLength) {
                    min = str1.slice(start, end + 1);
                    minLength = min.length;
                }

                pointer = 0;
            }
        }

        start++;
    }

    return min;
}

console.log(minWindow('abcdef', 'bce')); // bcde
console.log(minWindow('marshmellow', 'rml')); // rshmel
console.log(minWindow('barsqtagq', 'aq')); // agq 
console.log(minWindow('hello', 'ez')); // ""
console.log(minWindow('hello', 'ze')); // ""
console.log(minWindow('abcdbebe', 'bbe')); // bebe