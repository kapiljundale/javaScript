let Objectkapil = {
    hightKapil: 123,
    weightKapil: 45,
    nickName: "kap"
}
//to check property is avilable or not in object
let isavailable = "hightKapil" in Objectkapil;
console.log(isavailable);
//and
let isavailable1 = "age" in Objectkapil;
console.log(isavailable1);

console.log("---------------------------------------------");
//for-in-loop to travarse the object

const mohitPerson =  {
    fullName: "Sachin Tendulkar",
    age: 42,
    "isMarried": true
}

for (const key in mohitPerson) {
    if (Object.hasOwnProperty.call(mohitPerson, key)) {
        const element = mohitPerson[key];
        console.log(element);
    }
}
console.log("---------------------------------------------");

