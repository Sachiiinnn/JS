const user ={
    username : "Sachin",
    price : "1000",

    welcomeMesaage : function(){
        console.log(`${this.username}, Welcome to website`);  // this actually refer current context
        console.log(this);
}
}
// Object.freeze(user);
// user.welcomeMesaage();
// user.username = "Richa";
// user.welcomeMesaage();

// console.log(this); // in vs code it gives empty object as nothing declared in global scope but in browser it shows windows as window is global scope in browser

// function chai(){
//     let userName = "Sachin"
//     console.log(this.userName);
// }
// chai(); // this gives value only used in objects

// const chai = function(){
//     let userName = "Sachin";
//     console.log(this.userName) ;
// }
// chai(); 

// const chai = () => {
//     let userName = "Sachin";
//     console.log(this);
// }
// chai(); arrow functions


// ++++ arrow +++++

// const addTwo = (num1,num2) => { 
//     return num1 + num2;
// } basic arrow


// const addTwo = (num1, num2) => num1 + num2;
// const addTwo = (num1, num2) => (num1 + num2);// in parantheisis() return not required  
const addTwo = (num1, num2) => ({username : "Sachin"}) //{} using curly need return keyword

console.log(addTwo(1,2));

const myArr = [2, 3, 4 , 5];
// myArr.forEach(() => ())