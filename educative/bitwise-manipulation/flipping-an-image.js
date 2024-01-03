/*
Statement:
Given that an image is represented by an (n×n) matrix containing 0s and 1s,
flip and invert the image, and return the resultant image.
Horizontally flipping an image means that the mirror image of the matrix should be returned.
Flipping [1,0,0] horizontally results in [0,0,1].
Inverting an image means that every 0 is replaced by 1, and every 1 is replaced by 0.
Inverting [0,1,1] results in [1,0,0].


Test:
[[1,1,1],       :       [[0,0,0],
 [1,1,0],       :        [1,0,0],
 [0,0,0]]       :        [1,1,1]]


Solution:
Use two pointers. One is going forward and the other is going backward.
(1). If the two elements are the same, then make a slight change like this 0 -> 1 or 1 -> 0.
(2). If the two elements are different, DON'T do anything. Just let it go.


Complexity:
T: O(n)
S: O(1)
*/

function flipAndInvertImage(image) {
  for (let r = 0; r < image.length; r++) {
    for (
      let start = 0, end = image[0].length - 1;
      start <= end;
      start++, end--
    ) {
      if (image[r][start] === image[r][end]) {
        image[r][start] ^= 1;
        image[r][end] = image[r][start];
      }
    }
  }

  return image;
}

console.log(
  flipAndInvertImage([
    [1, 1, 1],
    [1, 1, 0],
    [0, 0, 0],
  ])
);
