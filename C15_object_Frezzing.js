const person = {
    name: "Mohit",
    rollNo : 1234
}
Object.freeze(person); //does not allow the change the object properties

person.name = "Mohit Sharma";// Modification not considered as person object is freezed
person.street = "AS CLUB"; // Adding new property is not considered as person object is freezed
console.log(person);


const arrayNumbers = [2, 4, 5, 6, 7];
// arrayNumbers = [ ];
Object.freeze(arrayNumbers); // Immutable: We can not change the array values after creation or defining
// arrayNumbers.push(99); //Not allowed as object is freezed
console.log(arrayNumbers);


//creat the clone of previous object
const student = {
    name: "Mohit",
    rollNo : 1234
}

let studentClone = Object.assign({}, student);
console.log(studentClone);

console.log("--------------------------------------------------------------------");
const student1 = {
    name: "Mohit",
    rollNo : 1234
}
const address = {
    city: "Pune",
    street: "AS CLUB"
}

let studentClone1 = Object.assign({}, student1);// Deep cloning will be performed
studentClone.name = "Mohit Sharma";
console.log(studentClone);
console.log(student);

//merge two objects
let mergedObject = Object.assign({}, student, address);
console.log(mergedObject);

//to check number is prime or not

function primeNumber(numberToCheck){
    for (let index = 2; index < numberToCheck; index++) {
      if(numberToCheck%index==0) {
          return false;
      }
    }
    return true;
  }
  
  console.log(primeNumber(11));
  console.log(primeNumber(9));
  console.log(primeNumber(29));
  
