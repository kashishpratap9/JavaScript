// promise is an object represrnt the eventual completion (or failure) of an asynchronous operation and its resulting value.
// asynchronous operation is an operation that does not block the execution of the program while it is being performed.
//async await (), promises
//pending(initial state ), fullilled, rejected

const promiseOne= new Promise(function(resolve, rejection){
    //do async task
    //db task, network related task
    setTimeout(()=>{
        console.log("Async task completed");
        resolve();//connect to then

    }, 1000)
})


promiseOne.then(function(){
    console.log("Promise is resolved");
})



new Promise(function(resolve, rejection){
    //do async task
    //db task, network related task
    setTimeout(()=>{
        console.log("Async task2 completed");
        resolve();//connect to then

    }, 1000)
}).then(function(){
    console.log("Promise2 is resolved");
})

const promiseThree= new Promise(function(resolve, reject){
    setTimeout(()=>{

        resolve({username: "John", age: 30});

    }, 1000)
    
}).then((user)=>{
    console.log(user);

})

const promiseFour= new Promise(function(resolve, reject){
    setTimeout(()=>{
        let error= false;
        if(!error){
            resolve(({username:"kashish", password: "1234"}));

        }else{
            reject("Error: Something went wrong!");
        }

    }, 1000)
})
promiseFour
.then((user)=>{
    console.log(user);
     return user.username;

})
.then((name)=>{
    console.log(name);

})
.catch((err)=>{
    console.log(err);

}).finally(()=>{
    console.log("the promise is either resolve or rejected")
})

// console.log(username); // This will log a Promise object, not the username

const promiseFive= new Promise(function(resolve, reject){
    setTimeout(()=>{
         let error= false;
        if(!error){
            resolve(({username:"kashish", password: "1234"}));

        }else{
            reject("Error: Something went wrong!");
        }

    }, 1000)
});

async function consumepromiseFive(){
    try{
   const response= await promiseFive;
   console.log(response);}
   catch(err){
    console.log("error got caught");
   }
}
consumepromiseFive();
//try catch block ko mannually handle krna pdta h 


async function getAllusers(){
      try{

    const response=await fetch('https://jsonplaceholder.typicode.com/users');
        const data = await response.json();
        console.log(data);}
        catch(err){
            console.log(err)
        }

    

}

getAllusers();

fetch('https://jsonplaceholder.typicode.com/users')
.then((response)=>{
    return response.json();

}).then((data)=>{
    console.log( data);
})
.catch((err)=>{
    console.log(err);

}).finally(()=>{
    console.log("hii completed")

});




