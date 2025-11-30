
// factorial

function factroial(number){
    let fact = 1
    while(number != 0){
        fact = fact * number
        number--
    }
    return fact
}
console.log(factroial(1))
console.log(factroial(2))
console.log(factroial(3))
console.log(factroial(4))
console.log(factroial(5))

// palindrome

let isPalindrome = (str) => {
    let reversed = "";
    let i = str.length - 1;

    while (i >= 0) {
        reversed = reversed + str[i];
        i--;
    }

    if (str === reversed) {
        return "YES, it is a Palindrome";
    } else {
        return "NO, it is not a Palindrome";
    }
};

console.log(isPalindrome("madam")); 
console.log(isPalindrome("hello"));

let isPalindrome1 = (str) => {
    let reversed = "";
    let i = str.length - 1;

    while (i >= 0) {
        reversed = reversed + str[i];
        i--;
    }

    return str === reversed;
};

console.log(isPalindrome1("madam")); // true
console.log(isPalindrome1("hello")); // false

// Leap Year

let isLeapYear = (year) => {
    if (year % 400 === 0) {
        return true;
    } else if (year % 100 === 0) {
        return false;
    } else if (year % 4 === 0) {
        return true;
    } else {
        return false;
    }
};

// Example
console.log(isLeapYear(2020)); 
console.log(isLeapYear(2100)); 
console.log(isLeapYear(2000)); 
console.log(isLeapYear(2028t)); 

// Print all even Numbers

let printEvenNumbers = () => {
    let i = 0;
    while (i <= 100) {
        if (i % 2 === 0) {
            console.log(i);
        }
        i++;
    }
};

printEvenNumbers();

