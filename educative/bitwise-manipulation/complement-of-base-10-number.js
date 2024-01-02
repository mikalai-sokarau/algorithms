/*
Statement:
For any n positive number in base 10, return the complement of
its binary representation as an integer in base 10.


Test:
222         :   33
43532534    :   23576329


Complexity:
T: O(n)
S: O(n)

where n is the number of bits in the binary representation of the number
*/

function findBitwiseComplement(n) {
  const mask = '1'.repeat(n.toString(2).length);

  return n ^ parseInt(mask, 2);
}

// console.log(findBitwiseComplement(222));
