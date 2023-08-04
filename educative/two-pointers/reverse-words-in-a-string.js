/*
Statement:
Given a sentence, reverse the order of its words without affecting the order of letters within a given word.

Test:
"Hello my friend!" -> "friend! my Hello"
"Area 51" -> "51 Area"

T: O(n)
S: O(n)
*/
function reverseLetters(letters, left, right) {
    while (left < right) {
        const tmp = letters[left];

        letters[left] = letters[right];
        letters[right] = tmp;

        left++;
        right--;
    }
}

function reverseWords(sentence) {
    const letters = sentence.trim().replace(/\s+/g, ' ').split('');
    
    reverseLetters(letters, 0, letters.length - 1);

    let left = 0;

    for (let i = 0; i <= letters.length; i++) {
        if (letters[i] !== ' ' && i !== letters.length) {
            continue;
        }

        reverseLetters(letters, left, i - 1);

        left = i + 1;
    }

    return letters.join('');
}

const reverseWordsEasy = (sentence) => sentence
    .split(' ')
    .reverse()
    .filter(Boolean)
    .join(' ');

console.log(reverseWords('friend! my    Hello  '))