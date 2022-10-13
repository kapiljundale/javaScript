console.log("---------To check number is even or odd---------------");

function evenOrOdd(arg) {
    if (arg%2==0) {
        console.log(`"${arg}" number is Even`);
    } else {
        console.log(`"${arg}" number is Odd`);
    }
    return;
}
evenOrOdd(45);
evenOrOdd(70);
evenOrOdd(67);
evenOrOdd(98);

console.log("---------To check person is eligible for vote or not---------------");

function voteOrNot(arg1) {
    if (arg1>=18) {
        console.log(`Your Age is "${arg1}". You are eligible to Vote`);
    } else {
        console.log(`Your Age is "${arg1}". You are NOT eligible to Vote`);
    }
    return;
}
voteOrNot(20);
voteOrNot(17);
voteOrNot(18);
voteOrNot(40);

console.log("---------To check String Contain more than 10 character or not---------------");

function stringCharacter(arg2) {
    var NumberOfCharacter = arg2.length;
    if (NumberOfCharacter>=10) {
        console.log(`"${arg2}" This string Contain more than 10 Character`);
    } else {
        console.log(`"${arg2}" This string does NOT Contain more than 10 Character`);
    }
    return;
}
stringCharacter("JavaScript-ES6");
stringCharacter("Kharat_Sir");
stringCharacter("Advika")

console.log("---------To check String start with Java---------------");

function stringStartWith(arg3) {
    var StringStart = arg3.startsWith("Java");
    if (StringStart=true) {
        console.log(`"${arg3}" This string start with Java`);
    } else {
        console.log(`"${arg3}" This string NOT start with Java`);
    }
    return;
}
stringStartWith("JavaScript Language")


console.log("-----------------------------------");
var abc = "CodeMind";
var xy = abc.startsWith("Co");
console.log(xy);