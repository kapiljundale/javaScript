class vehicle{
    constructor(vehicleName,vehicleColor,vehicleEngine,vehicleprice,vehicleFule){
        this.vehicleName = vehicleName;
        this.vehicleColor = vehicleColor;
        this.vehicleEngine = vehicleEngine;
        this.vehicleprice = vehicleprice;
        this.vehicleFule = vehicleFule;
    }
}

let car = new vehicle("Maruti Ertiga","White","1400CC","12 Lac","CNG");
let Bus = new vehicle("mercedes benz","Black","2000CC","75 lac","Petrol");
let tractor = new vehicle("Mahindra 555","red","2200CC","10 LAC","Desial");
let Bike = new vehicle("Unicorn","Black","150 CC", "1.5 LAC","petrol");
let Scooter = new vehicle("Activa 5G","Gray","120 CC","1 LAC","petrol")

console.table(car);
console.table(Bus);
console.table(tractor);
console.table(Bike);
console.table(Scooter);

console.log("--------------------------------------------------------------------------");

class college{
    constructor(Name,NumberOfBranches,IntakeCapacity,Address){
        this.Name = Name;
        this.NumberOfBranches = NumberOfBranches;
        this.IntakeCapacity = IntakeCapacity;
        this.Address = Address;
    }
}
let College1 = new college("College of Engineering, Pune",4,350,"Pune");
let College2 = new college("MIT C.O.E",5,450,"Pune");
let College3 = new college("VJIT C.O.E",5,500,"Mumbai");
let College4 = new college("Walchand C.O.E",7,550,"Sangli");
console.table(College1);
console.table(College2);
console.table(College3);
console.table(College4);
console.log("-------------------------------------------------------------------------------");
for (const key in College1) {
    if (Object.hasOwnProperty.call(College1, key)) {
        const element = College1 [key];
        console.log(element);
    }
}
console.log("-------------------------------------------------------------------------------");
for (const key in College2) {
    if (Object.hasOwnProperty.call(College2, key)) {
        const element = College2 [key];
        console.log(element);
    }
}
console.log("-------------------------------------------------------------------------------");
for (const key in College3) {
    if (Object.hasOwnProperty.call(College3, key)) {
        const element = College3 [key];
        console.log(element);
    }
}
console.log("-------------------------------------------------------------------------------");
for (const key in College4) {
    if (Object.hasOwnProperty.call(College4, key)) {
        const element = College4 [key];
        console.log(element);
    }
}

console.log("-------------------------------------------------------------------------");

var vehicle1 = {
    vehicleName2:"mercedes benz",
    vehicleColor2:"White",
    vehicleEngine2:"2000CC",
    vehicleprice2:"75 LAC",
    vehicleFule2:"Petrol"
}
for (const key in vehicle1) {
    if (Object.hasOwnProperty.call(vehicle1, key)) {
        const element = vehicle1[key];
        console.log(`${key} = ${element}`);
        
    }
}




