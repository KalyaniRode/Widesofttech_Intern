let numbers = [1,2,3,4,5]

console.log(numbers)
numbers.splice(3,0,"hello")
console.log(numbers)



let flowers = ["Rose", "Lily", "Tulip", "Lotus"];

flowers.splice(1, 1);

console.log(flowers);


// Array Methods

// 1. concat() -> joins two array

let a = [1, 2];
let b = [3, 4];
let c = a.concat(b);
console.log(c);

// 2. includes() -> Checks if a value exists (gives true/false).

let flowers1 = ["Rose", "Tulip"];
console.log(flowers1.includes("Tulip"));

// 3. filter() -> Creates a new array with elements that pass a condition.

let number = [10, 20, 30, 40];
let result = number.filter(num => num > 20);
console.log(result);

// 4. reverse() -> Reverse the array.

let nums = [1, 2, 3];
nums.reverse();
console.log(nums);

// 5. reduce() -> Reduces array to a single value.

let arr = [1, 2, 3, 4, 5];
let sum = arr.reduce((acc, curr) => acc + curr, 0);
console.log(sum);
