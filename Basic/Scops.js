// let var const

//global scope

// let a= 10
// const b= 20
// var c= 30
{
    //scope  
    // let var const
    //local scope 
let a= 10
const b= 20
var c= 30
}

// console.log(a)
//  console.log(b)
console.log(c)
// clousers : DOM(html ke wepage to maniuplate kiya jata hai javascript se ke sath)
function one(){
    const user= "kashish"
    function two (){
        const website= "youtube"
        console.log(user)
    }
    // console.log(website) // this will give an error because website is not defined in this scope   
    
    two() 
}

one()
// +++++++++++++++++++++++++++++++++++++++++
// function addOne(num){
//     return num+1;
// }
// addOne(5);

// addTwo(3) //
// const addTwo = function( num){
//      return num+2;
// }

//this keyword -> current context
const user={
    name:"kashish",
    price:99,
    welcomeMessage: function(){
        // console.log(`${this.name} welcome to the website!`)
        console.log( this)

    }
}
// user.welcomeMessage(); // this refers to the user object

// console.log(this); // this refers to the global object in non-strict mode, or undefined in strict mode

function chai(){
    let user = "annu"
    console.log( this.user)
    // console.log(this);
}
chai();

()=>{

}

const myf3 = (num1, num2) =>{
    return num1 + num2; 

}

const myf4 = (num1, num2) => ( num1 + num2);  
const myf5 = (num1, num2) => ({user:"kashish"})
// why this is not working in arrow function() ? beause arrow function does not have its own 'this' context, it inherits from the parent scope
// who is parent function of arrow functions? it is the global scope or the enclosing function where the arrow function is defined.
// who is the parnet function of myf3? it is the global scope in this case, so it does not have its own 'this' context.
   
console.log(myf3(5, 10)); // 15
console.log( myf5(5, 10)); //