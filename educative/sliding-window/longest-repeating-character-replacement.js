/*
Statement: 
Given a string, s, of lowercase English characters and an integer, k,
return the length of the longest substring after replacing at most k characters
with any other lowercase English characterso that all the characters in the substring are the same.


Test: 
abccbbad, 2     :   5 (bbbbb)
bzbzbz, 3       :   6 (bbbbbb / zzzzzz)


Complexity:
T: O(n)
S: O(1)
*/

function longestRepeatingCharacterReplacement(s, k) {
    const frequency = {};
    let longest = 0;
    let start = 0;
    let end = 0;
    let mostFrequent = 0;

    while (end < s.length) {
        frequency[s[end]] = (frequency[s[end]] ?? 0) + 1;
        mostFrequent = Math.max(mostFrequent, frequency[s[end]]);

        if (end - start + 1 - mostFrequent > k) {
            frequency[s[start]]--;
            start++;
        }

        longest = Math.max(longest, end - start + 1)
        end++;
    }

    return longest;
}


console.log(longestRepeatingCharacterReplacement('bzbzbz', 3)); // 6
console.log(longestRepeatingCharacterReplacement('abccbbad', 2)); // 5