const user = {
    username : "Sachin", 
    loginCount : 8,
    signedIn : true,

    getUserDetails : function(){
        // console.log("got user details from db");
        // console.log(`Username : ${this.username}`);
        // console.log(this);
    }

}

// console.log(user.username);
// console.log(user.getUserDetails());
// console.log(this);


function User(username, loginCount, isLoggedIn){
    this.username = username;
    this.loginCount = loginCount;
    this.isLoggedIn = isLoggedIn;

    this.greeting = function(){
        console.log(`Welcome ${this.username}`);
    }

    return this; 
}

const user1 =  new User("Sachin", 5, false) // by using new a new empty instance or object created
const user2 = new User("Richa", 7, true)
console.log(user1.constructor);
// console.log(user2 instanceof User);
