function myfunc(){
    console.log("hello world");
}

myfunc //function name
myfunc() //function reference
let myf1= function(num1, num2){ //parameters    
    console.log(num1 + num2)
}

let myf2= function(num1, num2){ //parameters    
    // let result= num1+ num2;
    //  console.log("kashish")
    return num1+ num2
}
myf1(10, "20");//arguments can be of different types

let result= myf2(10, 20);
console.log(result);
function loginUserMessage(username="annu"){
    if(!username){
        console.log("please enter user name")
        return
    }
    return `${username} just logged in`;

}
let message = loginUserMessage("kashish");
console.log(message);
let message1 = loginUserMessage("");
console.log(message1);

function CalculateCarPrice(val1,...num1){ //rest operator
    return num1;
}
console.log( CalculateCarPrice(1000, 2000, 3000, 4000, 5000));

const anyObj={
    username: "kashish",
    price: 1000
}
function handleObject(anyObj){
    console.log(`username is ${anyObj.username},and price is ${anyObj.price} `)

}

handleObject(
    {
    username: "kashish",
    price: 1000
}
);

const myNewArray =[200, 300, 400, 500];
function returnSecondValue(myNewArray){
    return myNewArray[1];
}
