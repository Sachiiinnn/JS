const myNums = [1, 2, 3, 4, 5, 6, 7, 8, 9 ,10];

// const newNums = myNums.map((num) => { // map automatically returns
//     return num + 10;
// })

const newNums = myNums
                .map((num) => {return num * 10})
                .map((num) => {return num + 1})
                .filter((num) => {return num >= 40})

console.log(newNums);
// const arr = []
// const newNums = myNums.forEach((val) => {
//     if(true){
//         arr.push(val + 10);
//     }
// })
// console.log(arr);