console.log("----Sample program for filter method------------ ");
const array = [20,30,4,5,60];
let NewArray = array.filter((element)=>{
    return element>10;
})
console.log(NewArray);

console.log("--------Assignment on filter Method--------");
const array_numbers = [20, 11, 40, 25, 37, 49, 9, 90, 60, 2, 19];
console.log(`Given Array: ${array_numbers}` );

console.log("**Find out all the numbers which are greater than 50 and log on console**");
let NewArray1 = array_numbers.filter((element)=>{
    return element>50;
})
console.log(NewArray1);

console.log("**Find out all the even number and log on console**");
let NewArray2 = array_numbers.filter((element)=>{
    return element%2==0;
})
console.log(NewArray2);

console.log("**Find out all the odd numbers and log on console**");
let NewArray3 = array_numbers.filter((element)=>{
    return element%2!==0;
})
console.log(NewArray3);

console.log("**Find out all the numbers which are multiple of 5**");
let NewArray4 = array_numbers.filter((element)=>{
    return element%5==0;
})
console.log(NewArray4);

console.log("**Find out all numbers which are between 20 and 50**");
let NewArray5 = array_numbers.filter((element)=>{
    return element>=20 && element<=50;
})
console.log(NewArray5);