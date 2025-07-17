function SetUsername(username){
    this.username = username;
}

function createUser(username, email, password){
    SetUsername.call(this, username); //refernce hold krne ke liye
    // call ->current exceution context pass kr deta h 
    this.email= email;
    this.password= password;
}

const var1= new createUser("akshish", "dwuefb@gmail.com", 39119)
console.log(var1);