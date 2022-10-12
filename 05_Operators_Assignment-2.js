
console.log("-----------------------------------------");
var greatestTwoValue  = function(arg1,arg2){
    var result = arg1>arg2?arg1:arg2;
    console.log(`Greatest value is: ${result}`);
}
greatestTwoValue(10,-10);
greatestTwoValue(800,899);

console.log("-----------------------------------------");
var evenOddNumber = function(arg3){
    var numberResult = arg3%2==0?true:false;
    console.log(`To check number is odd or Even:  ${numberResult}`);
}
evenOddNumber(29)
evenOddNumber(44)
evenOddNumber(0)
evenOddNumber(101)

console.log("---------------------------------------");

var wordLengthOddEven = function(arg4){
     var oddEven = arg4.length%2==0?"Even":"Odd";
     console.log(`To check the length of word is Even or ODD: ${oddEven}`);
}
wordLengthOddEven("JavaScript");
wordLengthOddEven("Google");
wordLengthOddEven("developer");

