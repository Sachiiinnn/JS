// let score = "33abc";
// let score = null; 
// let score = undefined;
// let score = true; // boolean
let score = "Sachin"; // string
console.log(typeof score); // number
let valueInNumber = Number(score);
console.log(typeof valueInNumber); // string
console.log(valueInNumber); // NaN (Not a Number)
// "33" => 33
// "33abc" => NaN
// "abc" => NaN
// true => 1
// false => 0       
// null => 0
// undefined => NaN    
let isLoggedIn = 1; // boolean
let booleanIsLoggedIn = Boolean(isLoggedIn);
console.log(booleanIsLoggedIn); // true
// 1 => true
// 0 => false
//"" => false
// "abc" => true