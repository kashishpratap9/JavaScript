 let myName= "kashish      "
 let newstring = "pratap     "

// myName.prototype.truelength=function(){
//     return ${this.myName}.trim();
// }
// console.log( myName.truelength);


let myHero= ["thor", "spiderman"];
let heroPower= {
    thor:"hammer",
    spiderman:"sling",
    getSpiderPower: function(){
        console.log(`spiderman ka power: ${this.spiderman}`)
    }
   
}

Object.prototype.kashish = function(){
     console.log('kashish is in all objects');
}


Array.prototype.pratap= function(){
     console.log('pratap is in all objects');
}

// myHero.kashish()
// heroPower.kashish()

// myHero.pratap()
// heroPower.pratap()


//prototypal inheritance 
const User={
    username:"kashish"

}
const Teacher={
    makeVideo:true

}

const TeachingSupport={
    isAvailable:false
}


const TAsupport={
    makeAssignmet:'JS assignment',
    fullTime:true,
    __proto__:TeachingSupport
}

// console.log(TAsupport.isAvailable)
Teacher.__proto__=User
// console.log(Teacher.username)


Object.setPrototypeOf(TeachingSupport, Teacher)
//teachingsupport ke ander sari property inherit ho rhi h Teacher ki


String.prototype.truelength= function(){
    console.log(`name : ${this}`)
     console.log(`name : ${this.trim().length}`)



}

newstring.truelength()

