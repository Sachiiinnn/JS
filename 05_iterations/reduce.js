const arr = [1,2,3];

// const total = arr.reduce(function (acc, curr) {
//     console.log(`Accumulator : ${acc} and Current value : ${curr}`);
//     return acc + curr;
// }, 0)


const total = arr.reduce((acc, curr) => acc + curr, 0)

// console.log(total);

const shoppingCart = [
    {
        itemName : "JS",
        price : 2999
    },
    {
        itemName : "py course",
        price : 1999
    },
    {
        itemName : "Mobile dev",
        price : 5999
    },
    {
        itemName : "data science",
        price : 12999
    }
]
const totalPrice = shoppingCart.reduce((acc,item) => {
    return acc + item.price;
},0);

console.log(totalPrice);
