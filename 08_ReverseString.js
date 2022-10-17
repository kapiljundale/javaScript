console.log("-----------------sample reverse the string program 1-------------------");
var myName = "kapil";
var lenthStr = myName.length - 1;
var reverseStr = "";
for (let index = lenthStr; index >= 0; index--) {
    //console.log(myName.charAt(index));
    reverseStr = reverseStr + myName.charAt(index)
}
console.log(reverseStr);


console.log("-----------------sample reverse the string program 2-------------------");
var str = "I am Java Developer"
var StringReverese = "";
var lengthstr = str.length - 1;
for (let index = lengthstr; index >= 0; index--) {
    var charOne = str.charAt(index);
    StringReverese += charOne;
}
console.log(StringReverese);

console.log("-----------------Assignment on reverse the string-------------------");
function reverseString(arg) {
    var str = arg;
    var StringReverese = "";
    var lengthstr = str.length - 1;
    for (let index = lengthstr; index >= 0; index--) {
        var charOne = str.charAt(index);
        StringReverese += charOne;
    }
    console.log(StringReverese);
}

reverseString("Hard work always pays back");
reverseString("Soon I will be angular IT Champ")

