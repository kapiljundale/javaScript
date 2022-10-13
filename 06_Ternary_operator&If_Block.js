console.log("--------------To check Male gender is Eligibale or Not By Using Ternary Operator----------------");

function maleMarriageEligibility(gender,age,boyName){
    var MarriageEligibility = age>=21?`Hey ${boyName} you are eligible for Marriage`:`Hey ${boyName} you Not eligible for Marriage`
    return MarriageEligibility; 
}
console.log(`Marriage Status of Billgate = ${maleMarriageEligibility("Male",25,"Billgates")}`);
console.log(`Marriage Status of Stew Jobs = ${maleMarriageEligibility("Male",17,"Stew Jobs")}`);

console.log("--------------To check feMale gender is Eligibale or Not By Using If else Block----------------");

function femaleMarriageEligibility(gender,age,girlName){
    if (age>=18) {
        console.log(`Hey ${girlName} you are eligible for Marriage`);
    } else {
        console.log(`Hey ${girlName} you are Not eligible for Marriage`);
    }
    return; 
}
femaleMarriageEligibility("feMale",16,"Jenifer");
femaleMarriageEligibility("feMale",27,"Malinda Gates");