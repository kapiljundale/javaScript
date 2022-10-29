const fruits_seasonal = ["Banana","Orange","Apple","Mango","Water Melon"];

console.log("------Log the first and last element of Array-----------");
console.log(fruits_seasonal[0]);
console.log(fruits_seasonal[4]);

console.log("------Add the Papaya element the befor Banana -----------");
fruits_seasonal.unshift("Papaya");
console.log(fruits_seasonal[0]);

console.log("------remove mango from the array -----------");
// delete fruits_seasonal[4];
// console.log(fruits_seasonal);
console.log(fruits_seasonal.slice(4));
console.log(fruits_seasonal);



