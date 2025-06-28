// let score = "33abc";
// let score = null; 
// let score = undefined;
// let score = true; // boolean
let score = "Sachin"; // string
console.log(typeof score); // string
let valueInNumber = Number(score);
console.log(typeof valueInNumber); // number
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


// operations
let value = 3;
let negValue = -value; // unary operator
// console.log(negValue); // -3
// console.log(3 + 3); // 6
// console.log(3 - 3); // 0
// console.log(3 * 3); // 9
// console.log(3 / 3); // 1
// console.log(3 % 2); // 1 (modulus operator)
// console.log(3 ** 2); // 9 (exponentiation operator)
// console.log(3 + "3"); // "33" (string concatenation)

let gameCounter = 100;
++gameCounter;
console.log(gameCounter); // 101
