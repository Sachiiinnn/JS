const User = {
    _email : "sachin",
    _password : "123abc",

    get email(){
        return this._email.toUpperCase();
    },
    set email(value){
        this._email = value;
    }
}

const sachin = Object.create(User)
console.log(sachin.email);
console.log(sachin);
