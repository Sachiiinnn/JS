// for of

//["","",""]
// [{},{},{}]

const arr = [1, 2, 3, 4, 5];

for (const num of arr) {
    // console.log(num);
}

const greeting = "Hello World!";
for (const greet of greeting) {
    // console.log(`Each char is ${greet}`);
    if(greet == " "){
        break;
    }
}

//maps

const map = new Map();
map.set("IN" , "India");
map.set("US", "United States of America");
map.set("Fr", "France");
map.set("Fr", "France");// no again entry only unique entry

// console.log(map);

for (const [key, value] of map) {
    console.log(key, ":-", value );
}

const myObj ={
    "Game1" : "BGMI",
    "Game2" : "GTA"
}

// for (const element of myObj) {
//     console.log(element);
// } object not iterable like maps