/*
Statement:
Given a sentence, reverse the order of its words without affecting the order of letters within a given word.

Test:
"Hello my friend!" -> "friend! my Hello"
"Area 51" -> "51 Area"

T: O(n)
S: O(n)
*/
function reverseWord(word, left, right) {
    while (left < right) {
        [word[left], word[right]] = [word[right], word[left]];

        left++;
        right--;
    }
}
function reverseWords(sentence) {
    const words = sentence.split(' ').reverse();

    for (let word of words) {
        reverseWord(word, 0, word.length - 1)
    }

    return words.filter(Boolean).join(' ');
}

console.log(reverseWords('friend! my    Hello  '))