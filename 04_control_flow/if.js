//if

// const temp = 52;
// if(temp < 50){
//     console.log("temp < 50");
// }
// else{
// console.log("temp is greater than 50")
// }
// if(false){
    
// } no execution
// <, >, <=, >=, ==, !=, ===(also does type checking), !==

// const score = 300;
// if(score > 100){
//     const power = "fly";
//     console.log(`User power ${power}`);
// }
// console.log(`User Power ${power}`);// no execute b/c of block scope

// const bal = 1000;
// if(bal > 500) console.log("test"); implicit scope

// if(bal < 500){
//     console.log("less than 500");
// }
// else if(bal < 750){
//     console.log("less than 750");
// }
// else if(bal < 900){
//     console.log("less than 900");
// }
// else{
//     console.log("less than 1200");
    
// }

const userLoggedIn = true;
const debitCard = true;
const loggedInFromGoogle = false;
const loggedInFromEmail = true;

if(userLoggedIn && debitCard){
    console.log("Allow to buy")
}

if(loggedInFromGoogle || loggedInFromEmail){
    console.log("allow login"); 
}
