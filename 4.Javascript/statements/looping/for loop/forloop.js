// 1. Print all even numbers from 0 to 1000
for (let number = 0; number <= 1000; number++) {
    if (number % 2 === 0) {
        console.log(number);
    }
}

// 2. Factorial of all even numbers from 1 to 10
for (let start = 1; start <= 10; start++) {
    if (start % 2 === 0) {
        let fact = 1;
        for (let num = start; num > 0; num--) {
            fact *= num;
        }
        console.log("Factorial of " + start + " is " + fact);
    }
}

// 3. Leap years from 1500 to 2025 with count
let count = 0;
for (let year = 1500; year <= 2025; year++) {
    if ((year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0)) {
        console.log(year);
        count++;
    }
}
console.log("There are total " + count + " leap years in range of 1500 to 2025!");

// 4. Reverse a number and check if it's a palindrome
let org_number = 121;
let number = org_number;
let rev = 0;

for (; number !== 0; number = Math.floor(number / 10)) {
    let d = number % 10;
    rev = rev * 10 + d;
}

console.log("Reversed number: " + rev);

if (org_number === rev) {
    console.log(org_number + " is a palindrome!");
} else {
    console.log(org_number + " is not a palindrome!");
}
