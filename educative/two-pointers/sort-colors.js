/*
Given an array, colors, which contains a combination of the following three elements:
0 (representing red)
1 (representing white)
2 (representing blue)
Sort the array in place so that the elements of the same color are adjacent,
with the colors in the order of red, white, and blue.
The function should return the same array.

T: O(n)
S: O(1)
*/
function sortColors(colors){
    let red = 0;
    let white = 0;
    let blue = colors.length - 1;

    while (white <= blue) {
        if (colors[white] === 0) {
            if (colors[red] !== 0) {
                const tmp = colors[red];
                colors[red] = colors[white];
                colors[white] = tmp;
            }
            red++;
            white++;
        } else if (colors[white] === 2) {
            if (colors[blue] !== 2) {
                const tmp = colors[blue];
                colors[blue] = colors[white];
                colors[white] = tmp;
            }
            blue--;
        } else {
            white++;
        }
    }

    return colors;
}

// Driver code
const inputs = [
    [0, 1, 0],
    [1, 1, 0, 2],
    [2, 1, 1, 0, 0],
    [2, 2, 2, 0, 1, 0],
    [2, 1, 1, 0, 1, 0, 2]
];

// Iterate over the inputs and print the sorted array for each
for (let i = 0; i < inputs.length; i++) {
    console.log(sortColors(inputs[i]));
}
