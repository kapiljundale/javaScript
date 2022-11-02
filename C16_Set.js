var arrayOfNumbers = [1, 3, 7, 8, 9, 3, 7];
console.log("========== Resize array========");
console.log(arrayOfNumbers.length);
arrayOfNumbers.length = 3;
console.log(arrayOfNumbers.length);
console.log(arrayOfNumbers);
arrayOfNumbers.length = 0; //it will clear empty array

//to creat set

let SetOfNumber = new Set();
console.log(typeof SetOfNumber);
console.log("====== Adding element into the set collection=======");
SetOfNumber.add(5);
SetOfNumber.add(10);
SetOfNumber.add(35);
SetOfNumber.add(48);
SetOfNumber.add(55);
console.log(SetOfNumber);

console.log("====== Adding duplicate element =======");
setOfNumbers.add(7);
console.log(SetOfNumber);

console.log("====== Checking number elements available into set =======");
console.log(SetOfNumber.size);

console.log("====== Deleting element 9 =======");
SetOfNumber.delete(9);
console.log(SetOfNumber.size);
console.log(SetOfNumber);

console.log("====== Check whether element 7 available into set or not =======");
let isAvailable = SetOfNumber.has(7);
console.log(isAvailable);
console.log(SetOfNumber.has(9));

//SetOfNumber.clear      //It will empty the set

console.log("====== Traversing set =======");
for (const element of setOfNumbers) {
    console.log(element);
}


//remove duplicate elements in array
var arrayOfNumbers = [1, 3, 7, 8, 9, 3, 7];
var RemovedDuplicate = new set(arrayOfNumbers);
console.log(RemovedDuplicate);

//remove duplicate elements in array using spread operator
let UniqueValue = [...new set(arrayOfNumbers)];
console.log(UniqueValue);