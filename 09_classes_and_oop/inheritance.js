class User{
    constructor(username) {
        this.username = username
    }
    logMe(){
        console.log(`Username is ${this.username}`);
        
    }
}

class Teacher extends User{
    constructor(username, email, password){
        super(username)
        this.email = email;
        this.password = password;
    }
    addCourse(){
        console.log(`New Course added by ${this.username}`);
        
    }
}
const chai = new Teacher("Sachin", "Sachin#uqhu", 123)
const chai1 = new User("Richa")
console.log(chai);

chai.addCourse();

chai1.logMe();
chai.logMe();

console.log(chai instanceof User);
