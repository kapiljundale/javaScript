const array_number = [1,-7,40,502,-77,91,0,108,89,-601];

console.log("----log the array element with its index using forEach()----");
array_number.forEach((currentValue,index)=>{
    console.log(`Index is = ${index},Element is = ${currentValue}`);
});

console.log("----find positive number log on console----");
array_number.forEach((currentValue)=>{
    if (currentValue>=0) {
        console.log(`${currentValue} is positive value`);
    }
});

console.log("----find negative number log on console----");
array_number.forEach((currentValue)=>{
    if (currentValue<0) {
        console.log(`${currentValue} is Negative value`);
    }
});

console.log("----find even number log on console----");
array_number.forEach((currentValue)=>{
    if (currentValue%2==0) {
        console.log(`${currentValue} is Even value`);
    }
});

console.log("----find sum of all number log on console----");
let sum = array_number.reduce((value,runningTotal)=>{
    return value + runningTotal;
});
console.log(`sum of all element is ${sum}`);


console.log("----log the even position number on console using forEach()----");
array_number.forEach((currentValue,index)=>{
    if (index%2==0) {
        console.log(`even position is = ${index},Element is = ${currentValue}`); 
    }
});

console.log("----log the odd position number value and number is negative on console using forEach()----");
array_number.forEach((currentValue,index)=>{
    if (index%2!==0 && currentValue<0) {
        console.log(`even position is = ${index},Element is = ${currentValue}`); 
    }
});

