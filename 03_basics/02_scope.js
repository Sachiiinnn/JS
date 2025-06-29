// var c = 200 
let a = 300;
if (true) {
    let a = 10;
    const b = 30;
    var c = 40;
}

// console.log(a); not defined 
// console.log(b); not defined
// console.log(c);

function one(){
    const username = "Sachin"

    function two(){
        const website = "Youtube"
        // console.log(username);
    }
    // console.log(website);
    two();
}
one();

if(true){
    const name = "Sachin";
    if(name === "Sachin"){
        const web = "Youtube";
        // console.log(`name is ${name} and web is ${web}`);
    }
    // console.log(web);
}
// console.log(name);


// ++++++++++++++++++++ interesting ++++++++++++++++++++

console.log(addOne(5)); // no issue it will execute

function addOne(value){
    return value + 1;
}

console.log(addTwo(5)); // b/c of function declaration not execute
const addTwo = function(num){
    return num + 2;
}
