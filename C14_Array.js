const array1 = [1, 3, 4];

//to access value of array
console.log(array1[1]);

//update value of array
array1[2]=11;
console.log(array1);

//to check value is avliable or not in array
console.log(array1.includes(3));

//to travers the array in array(each element) using for loop
for (let index = 0; index < array1.length; index++) {
    const element = array1[index];
    console.log(element);
    
}

console.log("---------------------------------------------------");
//to travers the array in array(each element) using FOR-IN Loop
for (const index in array1) {
           const element = array1[index];
           console.log(element);
} 

console.log("---------------------------------------------------");
//to travers the array in REVERSE array(each element) using for loop
for (let index = array1.length-1; index >= 0; index--) {
    const element = array1[index];
    console.log(element);
    
}

console.log("---------------------------------------------------");
//add element at start of array
array1.unshift(10,6);
console.log(array1);

console.log("---------------------------------------------------");
//delete element at start of array
array1.shift();
console.log(array1);

console.log("---------------------------------------------------");
//slice element of array
console.log(array1.slice(2));
//console.log(array1.slice(1,3));

console.log("---------------------------------------------------");
//remove the element index to end from array using splice
console.log(array1.splice(2));
//console.log(array1.splice(startindex,numberOfElementToBeRemoved));

//insert value inbetween of array
console.log(array1.splice(2,0,63));
//array1.splice(beforeIndex,NotChangeValue,addBeforeIndexValue);

//Replacment value inbetween of array
console.log(array1.splice(2,1,63));
//array1.splice(beforeIndex,replaceValue,addBeforeIndexValue);
//console.log(array1.splice(2,2,63,68));(IndexValue,lengthofValue,addBeforeIndexValue1,addBeforeIndexValue2);
//console.log(array1.splice(2,2,63,68));






