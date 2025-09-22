 // Current Date & Time
let now = new Date();
console.log(now); 

// Specific Date Create
let birthday = new Date(2000, 4, 15, 10, 30, 0);
console.log(birthday); 

// Useful Methods of Date

let today = new Date();

console.log(today.getFullYear());  // Year = 2025
console.log(today.getMonth());     // Month (0-11) = 8 (for September)
console.log(today.getDate());      // Day of month = 6
console.log(today.getDay());       // Day of week (0=Sunday, 6=Saturday)
console.log(today.getHours());     // Hours = 22
console.log(today.getMinutes());   // Minutes
console.log(today.getSeconds());   // Seconds
console.log(today.getMilliseconds()); // Milliseconds

// Set Methods

let dt = new Date();
dt.setFullYear(2030);
dt.setMonth(0); // January
dt.setDate(1);

console.log(dt); // Tue Jan 01 2030 ......

//  small example of this all method 

function updateClock() {
      let now = new Date();
      let hours = String(now.getHours()).padStart(2, "0");
      let minutes = String(now.getMinutes()).padStart(2, "0");
      let seconds = String(now.getSeconds()).padStart(2, "0");

      document.getElementById("clock").innerText =
        hours + ":" + minutes + ":" + seconds;
    }
    setInterval(updateClock, 1000);
    updateClock(); 