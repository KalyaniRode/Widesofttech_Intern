let num = 10;
console.log("Type of num: " + typeof num);

// 1. Number to String
let value = 10;
console.log("Initially, value = " + value + " (type: " + typeof value + ")");

value = value.toString();
value = String(value);
console.log("Converted value: " + value + " (type: " + typeof value + ")");

// 2. Number to Boolean
let numBool = 10;
console.log("Initially, numBool = " + numBool + " (type: " + typeof numBool + ")");

numBool = Boolean(numBool);
console.log("After conversion, numBool = " + numBool + " (type: " + typeof numBool + ")");

// 3. String to Number
let string = "123";
console.log("Initially, string = " + string + " (type: " + typeof string + ")");

string = Number(string);
console.log("Converted string: " + string + " (type: " + typeof string + ")");

// 4. String to Boolean
let strBool = "Hello";
console.log("Initially, strBool = " + strBool + " (type: " + typeof strBool + ")");

strBool = Boolean(strBool);
console.log("After conversion, strBool = " + strBool + " (type: " + typeof strBool + ")");

// 5. Boolean to Number
let boolVal = true;
console.log("Initially, boolVal = " + boolVal + " (type: " + typeof boolVal + ")");

boolVal = Number(boolVal);
console.log("Converted boolVal: " + boolVal + " (type: " + typeof boolVal + ")");
