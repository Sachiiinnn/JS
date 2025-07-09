const promise1 = new Promise(function(resolve, reject){
    //Do an async task
    // DB calls, cryptography, network

    setTimeout(function(){
        console.log('Async task is complete');
        resolve();
    }, 1000)
});

promise1.then(function(){
    console.log("Promise consume");
    
})

new Promise(function(resolve, reject){
    setTimeout(function(){
        console.log("hello");
        resolve();
    }, 1000)
}).then(function(){
    console.log("resolved");
    
})

const promise3 = new Promise(function(resolve, reject){
    setTimeout(function(){
        resolve({username : "Sachin", email : "sanshu9582@gmail.com"});
    }, 1000)
})

promise3.then(function(user){
    console.log(user);
    
})

const promise4 = new Promise(function(resolve, reject){
    setTimeout(function(){
        let error = true;// change true and false
        if (!error) {
            resolve({username : "Sachin", password : "1234"})
        }
        else{
            reject('Error : something went true')
        }
        
    }, 1000)
})

promise4.then(function(user){
    console.log(user);
    return user.username;
    
}).then(function(username){
    console.log(username);
}).catch(function(error){
    console.log(error);
}).finally(function(){
    console.log("The promise is either resolved or rejected");
    
})


const promise5 = new Promise(function(resolve, reject){
    setTimeout(function(){
        let error = true;
        if (!error) {
            resolve({username : "Richa", age : "21"});
        }
        else{
            reject('Error : Richa went wrong')
        }
    }, 1000)
})

async function consumePromise5() {
    try {
        const response = await promise5;
        console.log(response);
    
    } catch (error) {
        console.log(error);
        
    }
}
consumePromise5();

async function getAllUsers() {
   try{ 
    const response = await fetch('https://api.github.com/users/Sachiiinnn')
    const data = await response.json();
    console.log(data);
   }
   catch(error){
    console.log(error);
   }
    
}

getAllUsers();

fetch('https://api.github.com/users/Sachiiinnn').then(function(response){
    return response.json();
}).then(function(data){
    console.log(data);
})
.catch(function(error){
    console.log(error);
})
