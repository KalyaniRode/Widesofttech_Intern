
let matrix = [
    [11, 12, 13],
    [14, 15, 16],
    [17, 18, 19]
];


console.log("First row:", matrix[0]);      
console.log("Element at row 3, col 2:", matrix[2][1]); 

for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[i].length; j++) {
        console.log("Value at [" + i + "][" + j + "]:", matrix[i][j]);
    }
}



let physics = [65, 72, 81];
let chemistry = [70, 68, 90];
let biology = [85, 75, 88];

let scores = [physics, chemistry, biology];

console.log("Chemistry marks of 2nd student:", scores[1][1]); // 68
console.log("Biology marks of 1st student:", scores[2][0]);   // 85

for (let i = 0; i < scores.length; i++) {
    console.log("Subject " + (i + 1) + " scores:", scores[i]);
}

