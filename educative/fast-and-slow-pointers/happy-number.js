/*
Statement:
Write an algorithm to determine if a number n is a happy number.
We use the following process to check if a given number is a happy number:
Starting with the given number n, replace the number with the sum of the squares of its digits.
Repeat the process until:
The number equals 1, which will depict that the given number nis a happy number.
It enters a cycle, which will depict that the given number n is not a happy number.
Return TRUE if n is a happy number, and FALSE if not.

test:
28 -> true
4 -> false
1 -> true

T: O(log n + k) where n is the value of the input number, k is the number of iterations in the loop,
S: O(1)
*/

function isHappyNumber(n) {
    let slow = n;
    let fast = squareDigits(n);

    do {
        if (fast === 1) {
            return true;
        }

        slow = squareDigits(slow);
        fast = squareDigits(squareDigits(fast));
    } while (slow !== fast);
    
    return false;
}

function squareDigits(n) {
    let sum = 0;

    while (n > 0) {
        const tmp = Math.floor(n / 10);
        const current = n % 10;

        n = tmp;
        sum += current ** 2;
    }

    return sum;
}

console.log(isHappyNumber(4));
console.log(isHappyNumber(28));
console.log(isHappyNumber(1));