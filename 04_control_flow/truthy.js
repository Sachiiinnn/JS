const userEmail = "sachin@google";

if(userEmail){
    console.log("true");
}else{
    console.log("no email")
}

// falsy value
// false, 0, -0, bigInt 0n, "" , null, undefined, NaN

// truthy value
// "0", "false", " ", [], {}, function(){}

//to check array empty

// const user = [];
// if(user.length === 0){
//     console.log("Array is Empty"); 
// }

// to check object empty

const emptyObject = {};
if(Object.keys(emptyObject).length === 0){
    console.log("Empty object");
}

// Nullish Coalescing Operator (??); null undefined

let val1;
// val1 = 5 ?? 10;
// val1 = null ?? 10;
// val1 = undefined ?? 15;

val1 = null ?? 10 ?? 15

console.log(val1);

// Terniary Operator

// condition ? true : false

const price = 100
price >= 80 ? console.log("Price is high") : console.log("Price is low")