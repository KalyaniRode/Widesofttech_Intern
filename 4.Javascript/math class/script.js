// Random Numbers
console.log(Math.random());  
console.log(Math.floor(Math.random() * 10) + 1);

// rounding methods

console.log(Math.round(4.6));  // 5  → nearest integer
console.log(Math.ceil(4.2));   // 5  → always up
console.log(Math.floor(4.9));  // 4  → always down
console.log(Math.trunc(4.9));  // 4  → removes decimal part


// example of mathclass 
// dice roller

function rollDice() {
  return Math.floor(Math.random() * 6) + 1;
}

console.log(" You rolled: " + rollDice());