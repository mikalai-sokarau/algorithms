/*
Statement:
Create a method, encode, that converts an array of strings into a single string
and then sends it over the network. Create another method, decode,
that takes the encoded string and converts it back into the original array of strings.


Test:
['Hello','world','!']    ->    ******    ->    ['Hello','world','!']


Complexity:
T: O(n) where n is the number of strings in the array
S: O(1)
*/

function encode(strings) {
  let result = '';

  function getEncodedLength(s) {
    let l = String(s.length);

    for (let i = l.length; i < 4; i++) {
      l = '0' + l;
    }

    return l;
  }

  for (const str of strings) {
    result += getEncodedLength(str) + str;
  }

  return result;
}

function decode(string) {
  const result = [];
  let pointer = 0;

  function getDecodedLength(s) {
    let l = '';

    for (let i = 0; i < 4; i++) {
      l += s[i];
    }

    return parseInt(l);
  }

  while (pointer < string.length) {
    const length = getDecodedLength(string.slice(pointer));

    pointer += 4;

    result.push(string.slice(pointer, pointer + length));

    pointer += length;
  }

  return result;
}

// const encoded = encode(['Hello', 'world', '!']);
// console.log(encoded);
// const decoded = decode(encoded);
// console.log(decoded);
