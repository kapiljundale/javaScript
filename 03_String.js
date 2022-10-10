
var stringUse = "JavaScript the most popular language"

//Total Char available in the String
console.log("--------Total Char available in the String----------");
var len = stringUse.length;
console.log(len);

//find the index of char 'S'
console.log("--------find the index of char 'S'----------");
console.log(stringUse.indexOf("S"));

//find the index of string of 'lang'
console.log("--------find the index of string of 'lang'----------");
console.log(stringUse.indexOf("lang"));

//find the last character using length property
console.log("--------find the last character using length property----------");
console.log(stringUse.charAt(stringUse.length-1));

//find the 3rd last character using the length property
console.log("--------find the 3rd last character using the length property----------");
console.log(stringUse.charAt(stringUse.length-3));