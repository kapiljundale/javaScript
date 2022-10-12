
console.log("---------print the given words-------");
var wordLengthSquare = function(arg1){
    console.log(arg1);
}
wordLengthSquare("JavaScript");
wordLengthSquare("Google");
wordLengthSquare("Developer");

console.log("-----------------------------------------------------");
var wordLengthSquare1 = function(arg){
    var lengthSquare = arg.length;
    return lengthSquare*lengthSquare;
}
console.log(`JavaScript Length Square is : ${wordLengthSquare1("JavaScript")}`);
console.log(`JavaScript Length Square is : ${wordLengthSquare1("Google")}`);
console.log(`JavaScript Length Square is : ${wordLengthSquare1("Developer")}`);

console.log("---------------------------------------------------");
var stringLengthDivide = function(){
    var string1 = "I am Angular developer";
    var stringLength = string1.length;
    var stringdivide = string1.split(" ").length;
    console.log(`String length divided by number of words: ${stringLength/stringdivide}`); 
    console.log(`String length multiply by number of words: ${stringLength*stringdivide}`); 
}
stringLengthDivide();

console.log("---------------------------------------------------");

function revString(str){
    console.log(`Given String is : ${str}`); 
    return str.split('').reverse().join('');
}
 console.log(`Reverse String is : ${revString(" I am Angular developer")}`); 
