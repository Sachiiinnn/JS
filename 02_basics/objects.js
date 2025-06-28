//singleton (constructors)  
// Object.create() method


//object literals (no singleton)
const mySym = Symbol("key1");

const JsUser = {
    name : "Sachin",
    "Full name" : "Sachin k",
    [mySym]: "myKey1", // symbol are in [] brackets
    age : 30,
    location : "India",
    email : "sanshu9582@gmail.com",
    isLoggedIn : false,
    lastLoginDays : ["Monday", "Tuesday"]
}

// console.log(JsUser.email);
// console.log(JsUser["email"]);
// console.log(JsUser["Full name"]);
// console.log(JsUser[mySym]);


 JsUser.email = "namenyone";
//  Object.freeze(JsUser); // prevents any changes to the object
 JsUser.email = "hello@gamil"; // this will not change the email
// console.log(JsUser.email); // still "namenyone"

// console.log(Object.keys(JsUser)); // returns keys of the object
// console.log(JsUser);

JsUser.greeting = function() {
    // console.log("Hello Js User");
}

JsUser.greetingTwo = function(){
    // console.log(`Hello Js User , ${this.name}`)
}

// console.log(JsUser.greetingTwo()); // function reference

// console.log(JsUser.greeting); // function reference only
// console.log(JsUser.greeting()); // function call

// ++++++++++++++++++++++ part 2 +++++++++++++++++++++++
// singleton (constructors)
const tinderUser = new Object(); // empty object
tinderUser.id = "12309";
tinderUser.name = "Sachin";
tinderUser.isLoggedIn = false;

//  console.log(tinderUser);

const regularUser = {
    email : "hgduyg",
    fullname : {
        userFullname :{
            firstName : "Sachin",
            lastName : "Kumar"
        }
    }
}

// console.log(regularUser.fullname.userFullname.firstName); // Sachin

const obj1 ={
    1 : "one",
    2 : "two",
}
const obj2 = {
    3 : "three",
    4 : "four"  
}
// const obj3 = {
//     obj1, obj2
// }
// console.log(obj3); // { obj1: { '1': 'one', '2': 'two' }, obj2: { '3': 'three', '4': 'four' } }

// const obj3 = Object.assign({}, obj1, obj2); // merges obj1 and obj2
// console.log(obj3); // { '1': 'one', '2': 'two', '3': 'three', '4': 'four' }

const obj3 = { ...obj1, ...obj2 }; // merges obj1 and obj2 using spread operator
// console.log(obj3); // { '1': 'one', '2': 'two', '3': 'three', '4': 'four' }

const users =[
    {
        name: "Sachin",
        age: 30,
        email: "jhdfwjb"
    },
    {
        name: "John",
        age: 25,
        email: "jhhbkhbh"
    },
    {
        name: "Jane",
        age: 28,
        email: ""
    }
]

console.log(users[1].email);

console.log(Object.keys(tinderUser)); // returns keys of the object
console.log(Object.values(tinderUser)); // returns values of the object 
console.log(Object.entries(tinderUser)); // returns key-value pairs of the object as an array
console.log(Object.hasOwn(tinderUser, "isLoggedIn")); // checks if the object has the
