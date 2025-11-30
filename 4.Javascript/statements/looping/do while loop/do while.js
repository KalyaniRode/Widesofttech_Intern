// to check palindrome using do-while loop
let choice = false;

do {
    let number = org_number = Number(window.prompt("Enter number to check palindrome!"));

    let rev = 0;
    let d = 0;

    do {
        d = number % 10;               
        rev = rev * 10 + d;            
        number = parseInt(number / 10);
    } while (number != 0);

    console.log(rev);

    if (org_number == rev) {
        console.log(org_number + " is palindrome !");
    } else {
        console.log(org_number + " is not a palindrome !");
    }

    choice = window.confirm("Do you want to check again?");
} while (choice);

