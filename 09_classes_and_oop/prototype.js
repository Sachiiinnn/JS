// let myName = "Sachin     ";
// console.log(myName.trueLength);


let myheroes = ["Aashu", "Richa"];
let score = {
    Aashu : 98, 
    Richa : 100,
    
    getRichaScore : function(){
        console.log(`Score of Richa is ${this.score}`);
    }
} 

Object.prototype.sachin = function(){
    console.log("Sachin is there in all objects");
    
}
Array.prototype.heysachin = function(){
    console.log("Sachin hello");
    
}

// score.sachin()
// myheroes.sachin()
// myheroes.heysachin()
// score.heysachin()


//inheritance

const user = {
    name : "Sachin",  
    email : "sanshu9582"
}

const Teacher = {
    makeVideo : true, 
}

const TeachingSupport = {
    isAvailable : false,
}

const TASupport = {
    makeAssignment : 'js assignment',
    fullTime : true,
    __proto__ : TeachingSupport,
}
Teacher.__proto__ = user

//modern syntax

Object.setPrototypeOf(TeachingSupport, Teacher)

let anotherName = "Hello       ";

String.prototype.trueLength = function(){
    // console.log(`${this}`);
    // console.log(`${this.name}`);
    console.log(`True length is ${this.trim().length}`);
    
}

anotherName.trueLength();
"Sachin    ".trueLength();