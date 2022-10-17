console.log("---count the number of vowels in string a e i o u----"); 
var stringVowel = "Good Morning IT champ";
var stringLow = stringVowel.toLowerCase();
var count = 0;
for (let index = 0; index < stringVowel.length; index++) {
    var each = stringLow.charAt(index);
    if (each == "a" || each == "e" || each == "i" || each == "o" || each == "u") {
        console.log(each);
        count = count + 1;
    }
}
console.log(`Count of number of vowels = ${count}`);



console.log("---------------count the number of vowels in string---------------------------");  
function vowelString(){
    var stringVowel = "I love JavaScript don";
var stringLow = stringVowel.toLowerCase();
var count = 0;
for (let index = 0; index < stringVowel.length; index++) {
    var each = stringLow.charAt(index);
    if (each == "a" || each == "e" || each == "i" || each == "o" || each == "u") {
        console.log(each);
        count = count + 1;
    }
}
console.log(`Count of number of vowels = ${count}`);
}
vowelString();


console.log("---------------Sum of numbers from 1 to 10---------------------------");  
var sumOfAllFunction = function (arg) {
var sum=0;
for (let index = 1; index <=arg; index++) {
    sum = sum + index;
}    
    return sum;
}
console.log(sumOfAllFunction(10));

console.log("---------------Sum and Square of numbers from 1 to 10---------------------------");  
var sumOfAllFunction = function (arg) {
    var sum=0;
    for (let index = 1; index <=arg; index++) {
        sum = sum + (index*index);
    }    
        return sum;
    }
    console.log(sumOfAllFunction(10));



console.log("---------------even position charter from a string---------------------------");     
 function evenpositionChars(arg3) {
    var evenString = arg3;
   var removeSpace =evenString.split(" ").join("");
    for (let index = 0; index < removeSpace.length; index++) {
        if (index%2!==0) {
            console.log(removeSpace.charAt(index));
        }
    }
 }
 evenpositionChars("Hard work always pays back");
 evenpositionChars("Soon I will be angular IT Champ");

 console.log("---------------odd position charter from a string---------------------------");     
 function evenpositionChars(arg3) {
    var evenString = arg3;
   var removeSpace =evenString.split(" ").join("");
    for (let index = 0; index < removeSpace.length; index++) {
        if (index%2==0) {
            console.log(removeSpace.charAt(index));
        }
    }
 }
 evenpositionChars("Hard work always pays back");
 evenpositionChars("Soon I will be angular IT Champ");

    


   