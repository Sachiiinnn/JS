
class User{
    constructor(username) {
        this.username = username;
    }

    logMe(){
        console.log(`Username is ${this.username}`);
        
    }

    static createId(){
        return `123`;
    }
}

const sachin = new User("Sachin")
// console.log(sachin.createId());


class Teacher extends User{
    constructor(username, email) {
        super(username)
        this.email = email;
    }
}
const me = new Teacher("sachin", "eruisfhqw")
console.log(me.createId());
me.logMe();
