/*
Statement: 
Given a string, str, return the length of the longest substring without repeating characters.


Test:
hellomydearfriend   :   9 (lomydearf)
abcdbea             :   5 (cdbea)

Complexity:
T: O(n)
S: O(n)
*/

function findLongestSubstring(str) {
    const seen = {};
    let maxLength = 0;
    let currentLength = 0;
    let end = 0;

    for (let start = 0; start < str.length; start++) {
        while (!seen[str[end]] && end < str.length) {
            seen[str[end]] = (seen[str[end]] ?? 0) + 1;
            currentLength++;
            end++;
        }
        
        maxLength = Math.max(currentLength, maxLength);

        while (seen[str[start]] !== seen[str[end]]) {
            currentLength--;
            seen[str[start]]--;
            start++;
        }

        seen[str[start]]--;
        currentLength--;
    }
    
    return maxLength;
}

console.log(findLongestSubstring('hellomydearfriend'));
console.log(findLongestSubstring('abcdbea'));