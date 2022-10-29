class Bank {
    constructor(BankName, location, AccountNumber, IFSCCode, IntrestRate) {
        this.BankName = BankName;
        this.location = location;
        this.AccountNumber = AccountNumber;
        this.IFSCCode = IFSCCode;
        this.IntrestRate = IntrestRate;
    }
    details() {
        console.log(`Person Details: ${this.BankName}  ${this.location}  ${this.AccountNumber}  ${this.IFSCCode} ${this.IntrestRate}`);
    }
}
let AxisBank = new Bank("Axis Bank", "Pune", 1010101010, "UTIB0000037", "10%");
let SBIBank = new Bank("SBI Bank", "Solapur", 1023563210, "SBIN000432", "12%");
let ICICBank = new Bank("ICIC Bank", "Mumabi", 33261423563210, "ICIC0000321", "14%");
let KotakBank = new Bank("Kotak Bank", "Sangli", 56854465665260, "	KKBK0001772", "13%");
let HDFCBank = new Bank("HDFC Bank", "Kolhapur", 5985654653566210, "HDFC0000437", "12%");
let PunjabBank = new Bank("Punjab Bank", "Satara", 889811111552523210n, "PUNB0014110", "11%");
console.log(AxisBank);
console.log(SBIBank);
console.log(ICICBank);
console.log(KotakBank);
console.log(HDFCBank);
console.log(PunjabBank);


console.log("------Add all object element in array----------");
const AllBAnk = [AxisBank, SBIBank, ICICBank, KotakBank, HDFCBank, PunjabBank];
for (let index = 0; index < AllBAnk.length; index++) {
    const element = AllBAnk[index];
    console.log(` ${element.BankName}  ${element.location} `);

}

console.log("------From array find kotak Bank and log details Using for of----------");
for (const Bank of AllBAnk) {
    if (Bank.BankName == "Kotak Bank") {
        console.log(` Bank NAme=${Bank.BankName}, BankLocation=${Bank.location}, Bank AccountNumber=${Bank.AccountNumber} Bank IFSC Code= ${Bank.IFSCCode}, Interest Rate= ${Bank.IntrestRate}  `);
    }
}

// console.log("------From array find kotak Bank and log details Using for IN----------");
// for (let index = 0; index < AllBAnk.length; index++) {
//     var element = AllBAnk[index];
//     if(element.BankName=="Kotak Bank") {
//         console.log(` ${element.BankName}  ${element.location}  ${element.AccountNumber} ${element.IFSCCode}  ${element.IntrestRate}   `);
//     }
// }