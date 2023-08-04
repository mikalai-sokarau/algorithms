/*
Statement:
Write a function that takes a string as input and checks whether it can be a valid palindrome by removing at most one character from it.

Test:
raceacar -> true
karakan -> false
abcdedadedecba -> true

T: O(n)
S: O(1)
*/
function isPalindrome(s) {
    let start = 0;
    let end = s.length - 1;

    while (start < end) {
        if (s[start] !== s[end]) {
            return isPalindromeInRange(s, start + 1, end) || isPalindromeInRange(s, start, end - 1);
        }

        start++;
        end--;
    }

    return true;
}

function isPalindromeInRange(s, start, end) {
    while (start < end) {
        if (s[start] !== s[end]) {
            return false;
        }

        start++;
        end--;
    }

    return true;
}


/*
T: O(n)
S: O(n)
*/
function isPalindromeRecursive(s) {
    return checkPair(s, 0, s.length - 1, false);
}

function checkPair(word, left, right, isChanged) {
    if (left >= right) {
        return true;
    }
    if (word[left] === word[right]) {
        return checkPair(word, left + 1, right - 1, isChanged);
    }
    if (isChanged) {
        return false;
    }

    return checkPair(word, left + 1, right, true) || checkPair(word, left, right - 1, true);
}

console.log(isPalindrome('raceacar'));
console.log(isPalindrome('karakan'));
console.log(isPalindrome('abcdedadedecba'));
console.log(isPalindrome(''));