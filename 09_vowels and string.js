console.log("---------count the total number of vowels using include method------------");
var str = "I am very good IT developer";
var stringLowervowels= "aeiou";
var stringuppervowels= "AEIOU";
var stringCount = 0;
for (let index = 0; index < str.length; index++) {
    var stringchar = str.charAt(index);
    var islowerString =stringLowervowels.includes(stringchar);
    var isUpperString =stringuppervowels.includes(stringchar);
    if (islowerString || isUpperString) {
        stringCount =stringCount + 1;
    }
}
console.log(`Number of vowels in string is = ${stringCount}`);

console.log("---------to get the sum of cube of numbers from 1 to 5------------"); 
var cubeOfSum = 0;
for (let index = 0; index <= 5; index++) {
    var cube = index*index*index;
    cubeOfSum = cubeOfSum + cube;
}
console.log(cubeOfSum);

console.log("---------odd position charter from string------------"); 

function oddChar(arg) {
    var oddpositionChar = arg;
    for (let index = 0; index < oddpositionChar.length; index++) {
        var char = oddpositionChar.charAt(index);
        if (index%2!==0 && char!=" ") {
                console.log(char);
        }
    }   
}
oddChar("Hard work always plys back");
oddChar("Soon I will be Angular IT Champ");



