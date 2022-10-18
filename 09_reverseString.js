console.log("---------Reverse the Given string ------------------ ");

function reverseStringSpace(params) {
    var str = params;
    var strLength = str.length-1;
    var ReverseString="";
    for (let index = strLength; index >= 0; index--) {
        var reverse = str.charAt(index);
        if (reverse!=" ") {
            ReverseString = ReverseString + reverse;
         }
    }
        console.log(ReverseString);
            
}
reverseStringSpace("Hard work always plys back");
reverseStringSpace("Soon I will be Angular IT Champ");



