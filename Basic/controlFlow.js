// if (condition){
//     // This block executes if the condition is true
//     console.log("Condition is true");   

// }
//compaarsion operator
//  3!=3, >=, <, >=,!=, <=, ==, ===(type comparison)
if( 2 === "2"){
    console.log("executed")
}

const isUsrLoggedIn = true;
const temp = 50;
if( temp> 30 && isUsrLoggedIn) {
    console.log("User is logged in and temperature is above 30 degrees.");
}
else if(temp < 30 || isUsrLoggedIn) {
    console.log("Either temperature is below 30 degrees or user is logged in.");
}
else {
    console.log("Neither condition is met.");
}

console.log("This will always execute regardless of the conditions above.");

const score = 85;
if (score >=80) {
    const power = 2;
    console.log(`user power : ${power}`);
}

// console.log(`user power : ${power}`);

// switch(key){
//     case "value1":
//         console.log("This is value1");
//         break;
//     case "value2":
//         console.log("This is value2");
//         break;
//     default:
//         console.log("This is the default case");
//         break;  
// }
const month =3;
switch(month){
    case 1:
        console.log("January");
        break;
    case 2:
        console.log("February");
        break;
    case 3:
        console.log("March");
        break;
    case 4:
        console.log("April");
        break;
    case 5:
        console.log("May");
        break;
    case 6:
        console.log("June");
        break;
    case 7:
        console.log("July");
        break;
    case 8:
        console.log("August");
        break;
    case 9:
        console.log("September");
        break;
    case 10:
        console.log("October");
        break;
    case 11:
        console.log("November");
        break;
    case 12:
        console.log("December");
        break;
    default:
        console.log("Invalid month number.");
        break;  
}


const userEmail="cwi@gmail.com";
if( userEmail){
    console.log("got an email")
}else{
    console.log("no email found")
}

//falsy values
// 0, -0, flase, NaN, null, undefined, "",BogInt 0n
// // truthy values
// "0", "false", [], {}, function(){}, true, 1, -1 

// Nullish Coalescing Operatorlet val1= null
let val1;
val1= 5??10
val2= null ?? 10;
let val3= undefined ?? 20;
console.log(val3); // Output: 20
console.log(val2); // Output: 10
console.log(val1); // Output: 5

// Ternary Operator
const age = 18;
age>=18 ? console.log("Adult") : console.log("Minor");