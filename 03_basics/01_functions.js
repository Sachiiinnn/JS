
function sayMyName() {
    console.log("S");
    console.log("A");
    console.log("C");
    console.log("H");
    console.log("I");
    console.log("N");
}

// sayMyName();

// function addTwoNumbers(num1, num2) {
//     console.log(num1 + num2);
// }
// const result = addTwoNumbers(3, 5); // 8
// console.log(result); // undefined as the function does not return anything

function addTwoNumbers(num1, num2) {    
    return(num1 + num2);
}

const result = addTwoNumbers(3, 5); // 8
// console.log("Result :",result); // 8

function loginUserMessage(username = "Sam"){ // sam is default value
    if(username === undefined){
        console.log("Enter a valid username");
        return;
    }
    return(`${username} Just logged in`)
}

// const result1 = loginUserMessage("Sachin"); // if no argument is passed i.e () , it will be undefined
// // console.log(result1); // "undefined Just logged in"
// console.log(result1); // "Sachin Just logged in"

// console.log(loginUserMessage());



function calculateCartPrice(val1, val2, ...num1){ //rest operator ... same like spread operator
    return num1;
}
console.log(calculateCartPrice(200,300,400,500)) //val1 = 200, val2 = 300

const user ={
    username : "Sachin",
    price : 100
}

function handleObject(anyobject){
    console.log(`username is ${anyobject.username} and price is ${anyobject.price}`)
}

// handleObject(user);

handleObject({
    username : "Richa",
    price : 200 
})

const arr = [100, 200, 300];
function returnSecondValue(getArray){
    return getArray[1];
}

console.log(returnSecondValue(arr));