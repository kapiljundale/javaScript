//    var evenString = "Rudra is good boy";
//    var removeSpace =evenString.split(" ").join("");
//     for (let index = 0; index < removeSpace.length; index++) {
//         if (index%2!==0) {
//             console.log(removeSpace.charAt(index));
//         }
//     }


//     var loopString = "Advika can dance";
//     var eachchar = loopString.split("");
//     if (eachchar.includes(a)||eachchar.includes(e)||eachchar.includes(i)||eachchar.includes(o)||eachchar.includes(u)) {
    
//         console.log("string is vowel");
    
//     }
        
    
   // Count the total number vowels using includes() for string → “Good Morning IT Champ”
var countVowels = function(myString) {
    console.log("Count the total number vowels using includes() for string → “Good Morning IT Champ”");
    //var myString = "Good Morning IT Champ";
    var vowelsLoweCase = "aeiou";
    var vowelUpperCase = "AEIOU";
    var vowelsCount=0;
    for (let index = 0; index < myString.length; index++) {
       var char =  myString.charAt(index);
       var isLowerAvailable =  vowelsLoweCase.includes(char);
       var isUpperAvailable =  vowelUpperCase.includes(char);
       if (isLowerAvailable || isUpperAvailable) {
            vowelsCount = vowelsCount + 1;
       }
    }
    console.log(`Total Vowels count : ${vowelsCount}`);
}
countVowels("Good Morning IT Champ");

console.log("============================");
function evenPositionedChars(myString){
    for (let index = 0; index < myString.length; index++) {
       // console.log(index%2==0);
       var chh = myString.charAt(index);
       if (index%2==0 && chh!=" ") {
          console.log(chh);
       }
       //var chh = myString.charAt(index);
        
    }
}
evenPositionedChars("Hard work always pays back");
     
           