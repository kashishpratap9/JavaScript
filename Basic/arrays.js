let myarray= [0,1,2,3,4]
//shallow copy 
//jo bhi chnage hoga vo original me bhi hoga 
// console.log(myarray[1])
let myarr1= ["kashish", "pratap"]
// let myarr2= new Array(1, 8,95,37)
myarr1.push(6)
myarr1.push(8)
myarr1.pop()
myarr1.unshift("chandu")
myarr1.shift()
// console.log(myarr1.includes(9))
// console.log( myarr1.indexOf("kashish"))

let newarr= myarr1.join()
// console.log(myarr1)
// console.log(typeof newarr)
// console.log(myarr1)

//slice, splice
console.log("A, ",myarr1)
let mya1= myarr1.slice(1,3);
console.log(mya1)
console.log("B ", myarr1)
let mya2= myarr1.splice(1,3)
console.log(mya2)
console.log("C,", myarr1)

//
let marHeros= ["thor", "ironman ", "spiderman"]
let dcHeros=["superman", "flash", "batman"]
// marHeros.push(dcHeros)
let allHeros=marHeros.concat(dcHeros)
// console.log(allHeros)

let all_new_heors  =[...marHeros, ...dcHeros]
console.log(all_new_heors)

const an_array= [1,2,3,[4,5,6],[6,7,[4,5]]]
const real_an_array= an_array.flat(Infinity)
console.log(real_an_array)

//webscraping
console.log(Array.isArray("kashish"))
console.log(Array.from("kashish"))
console.log(Array.from({name: "kashish"}))

//return a new array from set of variables
let s1= 100
let s2=200
console.log(Array.of(s1,s2))