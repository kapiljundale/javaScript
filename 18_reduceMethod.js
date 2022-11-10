console.log("-----sample program on reduce Method----------");

const num = [10,8,2,5];

const sum = num.reduce((runningTotal,value)=>{
    return runningTotal+value;
})
console.log(`sum of array is: ${sum}`);


console.log("-----Assignment on reduce method-------");
console.log("**Find the sum of all numbers**");
const array_numbers = [20, 11, 40, 25, 37, 49, 9, 90, 60, 2, 19];
const sum1 = array_numbers.reduce((runningTotal,value)=>{
    return runningTotal+value;
})
console.log(`sum of array is: ${sum1}`);

console.log("**Find the sum of all even numbers**");
let NewArray2 = array_numbers.filter((element)=>{
    return element%2==0;
})
console.log(NewArray2);
const sum2 = NewArray2.reduce((runningTotal,value)=>{
    return runningTotal+value;
})
console.log(`sum of even number is: ${sum2}`);

