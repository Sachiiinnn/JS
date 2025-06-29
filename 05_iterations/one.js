// for

for (let i = 0; i <= 10; i++) {
    const element = i;
    if(element === 5){
        // console.log("5 is best number");
        // return element;
    }
    // console.log(element);
}

// console.log(element); block scope


for (let i = 1; i <= 10; i++) {
    // console.log(`outer loop ${i}`)
    for (let j = 1; j <= 10; j++) {
        // console.log(`inner loop ${j} and inner loop ${i}`);
        // console.log(i + '*' + j + '=' + i*j);
        
        
    }
}

let myArr = ["Sachin", "Richa", "Ayush"];
// console.log(myArr.length);
for (let index = 0; index < myArr.length; index++) {
    const element = myArr[index];
    // console.log(element);
}

//break and continue

// for (let i = 0; i <= 20; i++) {
//     const element = i;
//     if(i == 5){
//         console.log("5 detected");
//         break;
//     }
//     console.log(`value is ${element}`)
    
// } break  


for (let i = 0; i <= 20; i++) {
    const element = i;
    if(i == 5){
        console.log("5 detected");
        continue;// skip the condition for once
    }
    console.log(`value is ${element}`)
    
}