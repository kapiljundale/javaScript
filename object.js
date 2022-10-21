let Objectkapil = {
    hightKapil: 123,
    weightKapil: 45,
    nickName: "kap"
} 
 console.log(Objectkapil);

//ACess the object values
console.log(Objectkapil.weightKapil);
console.log(Objectkapil.hightKapil);
            //OR
console.log(Objectkapil["nickName"]);

//Add kay and value in object
Objectkapil.Pincode = 123456;
Objectkapil.professio = "Angular Developer"
console.table(Objectkapil);

//update the value of object
Objectkapil.hightKapil = 333;
console.table(Objectkapil);

//delete the value of object
delete Objectkapil.hightKapil;
console.table(Objectkapil);

//nested object
let ObjectRam = {
    hightRam: 123,  //OR
    "WeightRam": 45,
    nickName: "kap",
    address: {
        city : "pune"
     }
} 
// to acess value in nested object
console.log(ObjectRam.address.city)

//add value in nested object
ObjectRam.address.landmark = "Laxmi chowk";


//object inside the function //Method 
let ObjectRam = {
    hightRam: 123,  //OR
    "WeightRam": 45,
    nickName: "kap",
    add: function(){
        console.log("I am JS developer");
        console.log(this.hightRam);
     }
}

ObjectRam.add(); // to access the function inside the object
console.log(Object.entries(ObjectRam)); // to find number of entity in the object
console.log(Object.keys(ObjectRam)); // to find number of keys in the object
console.log(Object.values(ObjectRam));// to find number of values in the object
