const arrayName = [10,20,30,50,60,20,10];
console.log("------------------------");
arrayName.forEach( function(currentValue,index,array) {
    console.log(currentValue,index,array)
} );

console.log("--------------------------");
arrayName.forEach((currentValue,index)=>{
console.log(currentValue);
})

console.log("-----------------------------");
//Traversing set using ForEach()
const setOfNumber = new Set(arrayName);
setOfNumber.forEach((value)=>{
    console.log(value);
})

