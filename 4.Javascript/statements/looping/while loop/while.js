// 1. Print all even numbers from 0 to 1000
let number = 0;
while (number <= 1000) {
    if (number % 2 === 0) {
        console.log(number);
    }
    number++;
}

// 2. Factorial of all even numbers from 1 to 10
let start1 = 1;
let end1 = 10;
while (start1 <= end1) {
    if (start1 % 2 === 0) {
        let temp = start1;
        let fact = 1;
        while (temp !== 0) {
            fact = fact * temp;
            temp--;
        }
        console.log("Factorial of " + start1 + " is " + fact);
    }
    start1++;
}

// 3. Leap years from 1500 to 2025
let start = 1500;
let org_start = start;
let end = 2025;
let count = 0;
while (start <= end) {
    if ((start % 4 === 0 && start % 100 !== 0) || (start % 400 === 0)) {
        console.log(start);
        count++;
    }
    start++;
}
console.log("There are total " + count + " leap years in range of " + org_start + " to " + end + "!");

// 4. Next leap year after current year
let current_year = 2025;
let next_leap_year = current_year + 1;
while (!((next_leap_year % 4 === 0 && next_leap_year % 100 !== 0) || (next_leap_year % 400 === 0))) {
    next_leap_year++;
}
console.log("Next leap year after " + current_year + " is " + next_leap_year);

// 5. Reverse number and check palindrome
let org_number = 121;
let num = org_number;
let rev = 0;
while (num !== 0) {
    let d = num % 10;
    rev = rev * 10 + d;
    num = parseInt(num / 10);
}
console.log("Reversed number: " + rev);
if (org_number === rev) {
    console.log(org_number + " is a palindrome!");
} else {
    console.log(org_number + " is not a palindrome!");
}
