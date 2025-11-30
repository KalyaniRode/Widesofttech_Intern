



// wap in js to find out greater of 4 and 5 nunbers

let a = 20 , b =80 , c = 70 , d = 700

if(a > b){
    if(a > c){
        if(a > d){
            console.log("Greatest number is " + a)
        } else{
            console.log("Greatest number is " +d)
        }
    } 
   } else if(b > c){
        if(b > d){
            console.log("gratest number is "+ b)
        } else{
            console.log("gratest number is "+ d)
        }
    } else if(c > d){
        console.log("Greatest number is "+ c)
    } else{
        console.log("gratest number is "+ d)
    }


// wap in js to find out entered number is even or odd | +ve , -ve

// Even & Odd

let num = 4

if(num % 2 == 0){
    console.log(num + " is even")
}else{
    console.log(num + " is odd")
}

// positive amd negative

let number = -9

if(number > 0){
    console.log(number + " is positive")
}else if(number < 0){
    console.log(number + " is negative")
}else{
    console.log(" The number is zero")
}

// logical oprators in coditional statements

let p= 50
let q = 50
let r = 50
let s = 50
 
if(p==q){
    if(q==r){
        if(r==s){
            console.log("All values are same")
        }else{
            console.log("All values are not same")
        }
    }else{
        console.log("All values are not same")
    }
}else{
    console.log("All values are not same")
}