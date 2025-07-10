// // ES6

// class User {
//     constructor(username, email, password){
//         this.username = username;
//         this.email = email;
//         this.password = password;
//     }
//     encryptPassword(){
//         return `${this.password}abc`
//     }
//     capitalUsername(){
//         return `${this.username.toUpperCase()}`
//     }
// }

// const Sachin = new User("Sachin", "sachr", 123)
// console.log(Sachin.encryptPassword())
// console.log(Sachin.capitalUsername())


// behind the scene 
function User(username,email, password){
    this.username = username;
    this.email = email;
    this.password = password
}
User.prototype.encryptPassword = function(){
    return `${this.password}abc`
}

User.prototype.capitalUsername = function(){
    return `${this.username.toUpperCase()}`
}
const Sachin = new User("richa", "sachr", 100)
console.log(Sachin.encryptPassword())
console.log(Sachin.capitalUsername())
