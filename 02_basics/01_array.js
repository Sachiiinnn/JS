//array
//shallow copy(reference as in stack memory) not deep copy(no reference)
const myArr =[0,1,2,3,4,5];

const arr = new Array(1, 2, 3, 4, 5);

// console.log(myArr[1]);

//array methods
// myArr.push(6); //add to end
// myArr.push(7); //add to end
// myArr.pop(); //remove from end
// myArr.unshift(0); //add to start
myArr.shift(); //remove from start
// console.log(myArr.includes(2)); //check if element exists
// console.log(myArr.indexOf(2)); //get index of element
// console.log(myArr.indexOf(6)); //get index of element not in array

// const newArr = myArr.join(); //convert array to string
// console.log(newArr);
// console.log(typeof newArr); //check type of variable


//slice and splice
// console.log("A", myArr);

const slicedArr = myArr.slice(1, 3); //slice from index 1 to 3 (not inclusive)
// console.log( slicedArr); //sliced array
// console.log("B", myArr); //original array remains unchanged

// console.log(typeof slicedArr); //check type of variable

const splicedArr = myArr.splice(1, 3); //remove 3 elements from index 1
// console.log(splicedArr); //spliced array
// console.log("C", myArr); //original array is changed

//splice manipulates the original array whereas slice does not


// ++++++++++++++++++ part 2 ++++++++++++++++++++

const grp1 = ["Sachin", "Richa", "Ayush"];
const grp2 = ["Sreya", "Priya", "Sumit"];

// grp1.push(grp2);
// console.log(grp1);

// console.log(grp1[3][0]); //accessing nested array
// console.log(grp1[3][1]); //accessing nested array

// const grp3 = grp1.concat(grp2);
// console.log(grp3); //concat does not change the original array, it returns a new array

const grp3 = [...grp1, ...grp2]; //spread operator to merge arrays
// console.log(grp3); //concat does not change the original array, it returns a new array

const arr4 = [1, 2, 3, [4, 5 , 6], 7, [6, 7, [4, 5]]];

const new_arr4 = arr4.flat(Infinity); //flatten the array to remove nested arrays
// console.log(new_arr4); //flattened array

// console.log(Array.isArray("Sachin")); //check if variable is an array
// console.log(Array.from("Sachin"));

console.log(Array.from({name : "Sachin", age: 30})); //interesting use of Array only[] creates shallow copy array

let score1 = 100;
let score2 = 200;
let score3 = 300;   

console.log(Array.of(score1, score2, score3)); //create an array from variables create new array with the values of the variables