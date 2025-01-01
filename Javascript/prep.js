// function reverseNum(numBox) {
//     let output = [];
//     for (let i = numBox.length - 1; i >= 0; i--) {
//         output.push(numBox[i]);
//     }
//     return output;
// }

// let numBox = [12, 52, 34, 25, 18, 75];
// console.log(reverseNum(numBox)); // Output: [75, 18, 25, 34, 52, 12]


function findLen(num) {
    let count = 0;

    for (let a = 0; a < num.length; a++) {
        count++;
    }
    return count;
}

function revArr(num) {
    let count = findLen(num); // Get the length of the array
    let output = [];
    for (let i = count - 1; i >= 0; i--) {
        output.push(num[i]);
    }
    return output;
}

let num = [1, 5, 7, 8, 6, 4];
console.log(num)
console.log(findLen(num)); // Output: 6
console.log(revArr(num));  // Output: [4, 6, 8, 7, 5, 1]
