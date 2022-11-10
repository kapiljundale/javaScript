console.log("-------Map method for array multiplication-------");
const array_number = [20,11,40,25,23,11,9,90,60,2,19];
let multiplication = array_number.map((element,index)=>{
return element*2;
})
console.log(multiplication);


console.log("-----------------Assignment on MAP Method----------------");

console.log("**Add 10 on Each element**");
const array_numbers = [ 20, 11, 40, 25, 23, 11, 9, 31, 60, 2, 19 ];
let addNumber = array_numbers.map((element)=>{
    return element + 10;
})
console.log(addNumber);

console.log("**Square of Each element**");
let squareOfNumber = array_numbers.map((element)=>{
    return element * element ;
})
console.log(squareOfNumber);

console.log("**Add index on Each element**");
let addIndexOnNumber = array_numbers.map((element,index)=>{
    return element + index ;
})
console.log(addIndexOnNumber);

