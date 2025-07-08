// singleton( constructor)
// objects literals
// Object.create() -?singleton wala
const mysym= Symbol("key1")
const jsUser ={
    "full name":"kashish",
    age:18,
    location:"jaipur",
    [mysym]:"mykey1",
    email:"kashishpratap@gmail.com",
    isLoggedIn:false,
    lastLoginDays :["Monday", "Saturday"]

}

console.log(jsUser.name)
console.log(jsUser['location'])
console.log(jsUser[mysym])

jsUser.email="kashish9pratap.com"
// Object.freeze(jsUser)
jsUser.email="kashish10pratap.com"
console.log(jsUser)
jsUser.greetings= function(){
    console.log(`hello i an here ${this["full name"]}`)
}
console.log(jsUser.greetings())

const tinderUser={}
tinderUser.id="12319urhe"
tinderUser.name= "sami"
tinderUser.isLoggedIn=false
const regularUser ={
        email:"fifc@gmail.com",
        fullname:{
            username:{
                firstname:"vinay",
                 lastname:"Rani"
            }
        }
}

console.log(regularUser.fullname.username)

const obj1= {
    1:"a",
    2:"b"
}

const obj2= {
    3:"c",
    4:"d"
}
// const obj3={obj1, obj2}
const obj3= Object.assign({}, obj1, obj2)
//spread
const obj4= {...obj1, ...obj2}
// /database
const user=[
    {
        id:1,
        email:"dqwwbu@.com"
    },
    {
         id:2,
        email:"dqwwbu@.com"

    },
    {
        id:3,
            email:"dqwwbu@.com"
    }

]

//functions

console.log(obj3)
console.log(user[2].email)
console.log(tinderUser)
console.log(Object.keys(tinderUser))
console.log(Object.values(tinderUser))
console.log(Object.entries(tinderUser))
console.log(tinderUser.hasOwnProperty("isLoggedIn"))

//=====================================================================
//destructuring
const course={
    coursename:"js in hindi",
    price:"1213",
    courseInstrusctor:"hitesh"
}

course.courseInstrusctor
const {courseInstrusctor:ins}= course
console.log(ins)

const navbar= ({company}) =>{

}
navbar(company="kashish")
