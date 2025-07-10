function multiplyBy5(num){
    return num * 5;
}
multiplyBy5.power = 2;
// console.log(multiplyBy5(5));
// console.log(multiplyBy5.power);
// console.log(multiplyBy5.prototype);

function createUser(username, score){
    this.username = username;
    this.score = score;
}

createUser.prototype.increment = function(){
    this.score++;
}
createUser.prototype.printMe = function(){
    console.log(`Score is ${this.score}`);
    
}

const User1 = new createUser("Sachin", 98);
const User2 = new createUser("Richa", 100);

// console.log(User1);
// console.log(User2);

User1.increment();
User1.printMe();
