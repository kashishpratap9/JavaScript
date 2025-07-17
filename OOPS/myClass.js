// class User{
//         constructor(username, email, password){
//             this.username= username;
//             this.email= email;
//             this.password= password

//         }

//         encryptPassword(){
//             return `${this.password}abc`
//         }

//         changeUsername(){
//             return `${this.username.toUpperCase()}`

//         }

// }


function User(username, email, password){
     this.username= username;
    this.email= email;
    this.password= password;

}

User.prototype.encryptPassword= function(){
      return `${this.password}abc`;

}

User.prototype.changeUsername= function(){
    return `${this.username.toUpperCase()}`
    
}
const obj1= new User("kashish", "wdbufc@gmai.com", "247281");
console.log(obj1.encryptPassword())
console.log(obj1.changeUsername())
