let name = "kalyani rode"
console.log(name)

name = name.replace(name.charAt(0), name.charAt(0).toUpperCase())
name = name.replace(name.charAt(name.indexOf(" ") + 1), name.charAt(name.indexOf(" ") + 1).toUpperCase())

console.log(name)


// WAP in js to reverse a string
// hint : indexes and concatenation

let str = window.prompt("Enter your String")
let reversed = ""
let position = str.length
let choice = false

console.log(str)

while (position > 0) {
    let char = str.charAt(position - 1)
    reversed = reversed + char
    position--
}
console.log(reversed)
choice = window.confirm("Do you wish to continue yes/no")


// 1. WAP to write only unique characters from "HELLO WORLD"
// Output: H e l o w r d

let strr = "helloworld"
let uniquechar = ""

for (let i = 0; i < strr.length; i++) {
    if (uniquechar.indexOf(strr[i]) === -1) {
        console.log(strr[i])
        uniquechar += strr[i]
    }
}


// 2. WAP to write only Unique characters with counting no. Of characters from "HELLO WORLD"
// Output:- 
// H-1
// E-1
// L-3
// O-2
// W-1
// R-1
// D-1

let str1 = "helloworld"
let done = ""

for (let i = 0; i < str1.length; i++) {
    if (done.indexOf(str1[i]) === -1) {
        let count = 0
        for (let j = 0; j < str1.length; j++) {
            if (str1[i] === str1[j]) count++
        }
        console.log(str1[i].toUpperCase(), "-", count)
        done += str1[i]
    }
}


// 3. Create password using regex

let isStrongPassword = (password) => {
    let regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@#$%^&*!?])[A-Za-z\d@#$%^&*!?]{8,}$/
    return regex.test(password)
}

// Example
console.log(isStrongPassword("kalyani123"))   // false
console.log(isStrongPassword("Kalyani@123"))  // true
