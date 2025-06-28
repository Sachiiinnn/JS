// Memory management in JavaScript: Understanding value vs reference types
// stack(primitive types)
let one = "Sachin";
let two = one;
two = "Tendulkar";
console.log(one); // Output: Sachin
console.log(two); // Output: Tendulkar

// heap(reference types)
let Richa = {
    name: "Richa",
    age: 25
}

let Nidhi = Richa;

Nidhi.age = 30;
console.log(Richa.age); // Output: 30
console.log(Nidhi.age); // Output: 30