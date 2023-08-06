/*
Statement: 
Given a string, s, that represents a DNA subsequence, and a number k,
return all the contiguous subsequences (substrings) of length k that occur more than once in the string.
The order of the returned subsequences does not matter.
If no repeated substring is found, the function should return an empty set.

Test: 
ababcbabacba, 3   : [aba, bab, cba]
abbcadcba, 3      : []
abbcadcbbca, 2    : [bb, bc, ca]

Complexity:
T: O()
S: O()
*/

function findRepeatedSequences(s, k) {
    const seen = {};
    const result = new Set();

    for (let start = 0, end = k - 1; end < s.length; start++, end++) {
        const sequence = s.slice(start, end + 1);
        
        if (seen[sequence] && !result.has(sequence)) {
            result.add(sequence);
        } else {
            seen[sequence] = true;
        }
    }

    return result;
}


[
    ['ababcbabacba', 3],
    ['abbcadcba', 3],
    ['abbcadcbbca', 2]
].forEach(([s, k]) => console.log(findRepeatedSequences(s, k)))
