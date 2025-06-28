const score = 200;
// console.log(score);

const balance = new Number(400);
// console.log(balance); // Output: [Number: 400]

// console.log(balance.toString());
// console.log(balance.toFixed(2)); // Output: 400.00

const num = 3.14159;
// console.log(num.toPrecision(3)); // Output: 3.14

const hundreds = 1000000;
// console.log(hundreds.toLocaleString('en-IN')); // Output: 10,00,000

// ++++++++++++++++++++++ Maths ++++++++++++++++++++++
// console.log(Math);
// console.log(Math.abs(-3)); // Output: 3
// console.log(Math.round(3.6)); // Output: 4
// console.log(Math.ceil(3.6)); // Output: 4
// console.log(Math.floor(3.6)); // Output: 3
// console.log(Math.sqrt(16)); // Output: 4    
// console.log(Math.pow(2, 3)); // Output: 8
// console.log(Math.max(1, 2, 3, 4, 5)); // Output: 5


console.log(Math.random()); 
console.log((Math.random() * 10) + 1) ;
console.log(Math.floor(Math.random() * 10) + 1) ;


const min = 10;
const max = 20;
console.log(Math.floor(Math.random() * (max - min + 1)) + min);