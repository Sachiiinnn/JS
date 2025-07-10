function setUsername(username){
    this.username = username;
    console.log("Called");
    
}

function createUser(username, email, password){
    setUsername.call(this, username)
    this.email = email;
    this.password = password;
}

const sach = new createUser("Sachin", "sanshu9582@gmail.com", 123);
console.log(sach);
