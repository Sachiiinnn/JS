const myObj = {
    js : "Javascript",
    cpp : "c++",
    rb : "Ruby",
    swift : " swift by apple"
}

for (const key in myObj) {
    console.log(`${key} :- ${myObj[key]}`);
}


const myArr = ["js", "cpp", "ruby", "python", "java"];
for (const key in myArr) {
    console.log(myArr[key]);
    
}

const map = new Map();
map.set("In", "India");
map.set("US", "United States of America");
map.set("Fr", "France");

// for (const key in map) {
//     console.log(key);
    
// } not iteration
