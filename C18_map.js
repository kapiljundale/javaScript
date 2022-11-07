
const arrayName = [2,4,546,6,320,222,1,5];

const newArray = arrayName.map((element)=>{
    return element + 5;
})
console.log(newArray);
console.log(arrayName);

console.log("------------------");

//use of filter
let filterArray = arrayName.filter((element)=>{
    return element>=4
});
console.log(filterArray);

console.log("---------------------");
//use of reduce
let sum = arrayName.reduce((value,runningTotal)=>{
    return value + runningTotal;
},100);//this value indicate intilization.

console.log(sum);

console.log("------------------");
// sorting of array only work on string but to use in number then we have to use call back function
arrayName.sort((first,second)=>{
return (first > second ? 1 : -1) //asending order
//return (first > second ? -1 : 1) //desending order
});
console.log(arrayName);

