
var stringHandsOn = function(){

    var stringAss = "       Hey you are doing good, keep it up      ";
    console.log("-----------This is given String-------------");
    console.log(stringAss);
    console.log("-----------Given String Length-------------");
    var givenLength = stringAss.length;
    console.log(givenLength);
    console.log("-----------Remove Leading and trailing Extra Spaces-------------");
    var trimS = stringAss.trim();
    console.log(trimS);
    console.log("-----------print the count of total extra spaces Removed-------------");
    console.log(givenLength-trimS.length);
    console.log("-----------print the first and last letter after trim-------------");
    console.log("after trim First letter : " + trimS.charAt(0));
    console.log("after trim Last letter : " + trimS.charAt(trimS.length-1));
    console.log("-----------print the number of words-------------");
    var split = trimS.split(" ");
    console.log("Total Number of words are = " + split.length);
    console.log("-----------print the index of words good-------------");
    console.log(trimS.indexOf("good"));
    console.log("-----------Substring start from 22 substring(), slice()-------------");
    console.log("Substring using substring :" + trimS.substring(22));
    console.log("Substring using slice :" + trimS.slice(22));
    console.log("-----------is string end with word up-------------");
    console.log(trimS.endsWith("up"));
    console.log("-----------is string start with word Hey-------------");
    console.log(trimS.startsWith("Hey"));
    












}

stringHandsOn();