class Person{
    constructor(fullName, city, age, gender){
      this.fullName =   fullName;
      this.city = city;
      this.age = age;
      this.gender = gender;
    }
    details(){
        console.log(`Person Details: ${this.fullName}  ${this.city}  ${this.age}  ${this.gender}`);
    }
  
}
let sachin = new Person("Sachin Tendulkar", "Pune", 45, "Male");
let rohit = new Person("Rohit Shram", "Mumbai", 32, "Male");
console.log(sachin);
console.log(rohit);

console.log(s1 instanceof Student);
console.log(sachin instanceof Student);

sachin.details();

//function constructor
function Person(fullName, city, age, gender) {
    this.fullName = fullName;
    this.city = city;
    this.age = age;
    this.gender = gender;
}
let tend = new Person("Sachin Tendulkar", "Pune", 45, "Male");
console.log(tend);

let sharma = new Person("Rohit Sharma", "Pune", 32, "Male");
console.log(sharma);


//function constructor to call prototype

function Person(fullName, city, age, gender) {
    this.fullName = fullName;
    this.city = city;
    this.age = age;
    this.gender = gender;
}
Person.prototype.country = "India";
let sachin1 = new Person("Sachin Tendulkar", "Surat", 45, "Male");
let sharma2 = new Person("Rohit Sharma", "Pune", 32, "Male");
let riya = new Person("Riya", "Kolhapur", 22, "Female");
let sona = new Person("Sona", "Mumbai", 19, "Female");

console.log(sachin.country);
console.log(riya.country);



