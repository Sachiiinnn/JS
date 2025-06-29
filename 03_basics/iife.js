// Immediately Invoked Function Expressions (IIFE)

(function chai(){   // named iife
    console.log("hello");
})();


//global scope ke pollution se problem hoti hai toh usko hatane ke liye iife use hota hai

( (name) => { //simple iife
    console.log(`namaste ${name}`);
})("Sachin");