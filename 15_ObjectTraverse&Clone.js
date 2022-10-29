var bank_SBI = {
    AccountHolderName: "Rudra Jundale",
    AccountNumber: 100039141516,
    Branch: "Solapur",
    IFSCCOde: "SBIN0000441"
}

var bank_Location = {
    street: "Jule Solapur",
    city: "Solapur",
    Pin_Code:411033
}
console.log("-------------Clone by using the object.assign Operator-----------");
var bankSBIClone = Object.assign({},bank_SBI);
console.log(bankSBIClone);
var banklocationClone = Object.assign({},bank_Location);
console.log(banklocationClone);

console.log("-------------Clone by using the spread Operator-----------");
var spreadSBIClone = {...bank_SBI};
console.log(spreadSBIClone);
var spreadLocationClone = {...bank_Location};
console.log(spreadLocationClone);

var rate_of_Interest = {
    home_loan_Interest: "10%",
    personal_loan_Interest: "14%",
    due_Interest: "18%"
}

console.log("-------Marge the stapes 1,2 and 4 object ----------------");
var margeSBI_details = Object.assign({},bank_SBI,bank_Location,rate_of_Interest);
console.table(margeSBI_details);


console.log("-------Traverse the merged object and log details ----------------");
for (const index in margeSBI_details) {
    const element = margeSBI_details[index];
    console.log(element);
} 






