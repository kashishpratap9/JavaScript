const myNums= [1,2,3,4,5,6,7,8,910];
// const newNums=myNums.filter((nums) => nums>4)
const newNums=myNums.filter((nums) =>{
    return nums>4;
} )

const newNums2=myNums.map((nums)=> nums*10).map((nums)=>nums+1).filter((nums)=> nums>=40)
console.log(newNums2);
const initialvalue=0;

const total=myNums.reduce((accumulator, currentvalue) => accumulator + currentvalue , 0);

console.log( total);