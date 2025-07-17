// prototype in javascript
//prototypal behaviour

// function mulby5(num){
//     return num*5;/ }

// mulby5.power=2

// console.log(mulby5(5))
// console.log(mulby5.prototype)
// console.log(mulby5.power)


function createUser( username, score){
    this.username= username;
    this.score=score
}


createUser.prototype.increment= function(){
    this.score++;
}


createUser.prototype.printMe= function(){
    console.log(` your current score is ${this.score}`)
}

const chai = new  createUser("chai", 25);
const tea=  new createUser("tea", 250);

chai.printMe();

