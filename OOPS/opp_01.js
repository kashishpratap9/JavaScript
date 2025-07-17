const user= {
    username : "kashish",
    loginCount: 8,
    signedIn: true ,
    getUserDetails:function(){
        // console.log("got user details")
        // console.log(`username: ${this.username}`)
        // console.log(this);

    }
}

// console.log( user.username);
// console.log(user.getUserDetails())
// console.log(this)
//wherever we talk about the current contex then it wll leads to this keyword( like we have to use that keyword);


const user2= {
    username : "kashish",
    loginCount: 8,
    signedIn: true ,
    getUserDetails:function(){
        console.log("got user details")
        console.log(`username: ${this.username}`)
        console.log(this);

    }
}


// //constructor function
// const promiseOne = new Promise();
//new -> constructor function

// const date = new Date();

function User(username, loginCount, isLoggedIn){
    this.username = username;
    this.loginCount= loginCount;
    this.isLoggedIn= isLoggedIn;
    // return this;

    //by defalut return this is already there 
}

const userOne= new User("kashish", 12, false);
const userTwo=new  User("pratap", 10, true);

console.log( userOne);
console.log( userTwo);

//every time new instance 
// empty Object create
// constructor function call
// this keyword se sare vaiable values add on ho ajyenge 

