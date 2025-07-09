// //for
// for(let i = 0; i < 5; i++) {
//     console.log(i);
// }
// //while
// let j=0;
// while(j < 5) {
//     console.log(j);
//     j++;
// }

//do while
// let k=5;
// do {
//     console.log(k);
//     k++;
// }while(k < 5);

//  for of loop
// const arr= [1,2,3,4,5,6,7,8,9,0];
// for (const i of arr) {
//     console.log(i);
    
// }
const str = "Hello";
for( const s  of str){
    console.log(s);
}

//maps => unique values

const map = new Map();
map.set("name", "John");
map.set("age", 30);
map.set("city", "New York");
console.log(map);
for( const [k, v] of map){
   console.log(`${k}: ${v}`);

}

//object are not iteratable by this way
const myobj= {
    js:"jaascript",
    cpp: "c++",
    py:"python",
    rb :"ruby"

}

//for in
for (const key in myobj) {
   console.log( `${key} -> ${myobj[key]}`);
}

//for each 
const arr2 = [1, 2, 3, 4, 5];
//call backfunction-> no name
arr2.forEach(function (i){
    console.log(i);
})

arr2.forEach((i, index, arr2)=>{
    console.log(i, index, arr2);

})

function print(i){
    console.log(i);
}

arr2.forEach(print);
//reference

const myCoding=[
    {
        language: "JavaScript",
        languageFileName:"js",

    },
    {
        language: "Python",
        languageFileName:"py",
    },
    {
        language: "Java",
        languageFileName:"java",
    }

]

myCoding.forEach((item) => {
    console.log(`Language: ${item.language}, File Name: ${item.languageFileName}`);

})