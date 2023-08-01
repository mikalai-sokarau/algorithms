const findSumOfThree = (nums, target) => {
    const sorted = nums.sort((a, b) => a - b);

    for (let i = 0; i < sorted.length - 2; i++) {
        const current = sorted[i];
        let left = i + 1;
        let right = sorted.length - 1;

        while (left < right) {
            const sum = current + sorted[left] + sorted[right];

            if (sum === target) {
                return true;
            }
            if (sum > target) {
                right--;
            } else {
                left++;
            }
        }    
    }

    return false;
}

// Driver code
function main() {
    let numsLists = [
        [3, 7, 1, 2, 8, 4, 5],
        [-1, 2, 1, -4, 5, -3],
        [2, 3, 4, 1, 7, 9],
        [1, -1, 0],
        [2, 4, 2, 7, 6, 3, 1],
    ];

    let testLists = [10, 7, 20, -1, 8];

    numsLists.map((numList, i) => {
        console.log(i + 1 + ".\tInput array:", numsLists[i]);
        
        if (findSumOfThree(numsLists[i], testLists[i]))
            console.log("\tSum for", testLists[i], "exists");
        else console.log("\tSum for", testLists[i], "does not exist");
        
        console.log("-".repeat(100));
    });
}

main();