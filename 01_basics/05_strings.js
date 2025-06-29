const name = "Sachin";
const repoCount = 3;

// console.log(name + repocount ); deprecated

console.log(`Hello my name is ${name} and my repo count is ${repoCount}`); // using backticks for string interpolation placeholders

const user = new String("Richa"); // String object
console.log(user); // Output: [String: 'Richa']
console.log(typeof user); // Output: object 
console.log(user[0]);
console.log(user.length);
user.slice(0, 2); // String object methods
console.log(user.slice(0, 2)); // Output: Ri    
console.log(user.slice(-5,4)); 

console.log(user.split());