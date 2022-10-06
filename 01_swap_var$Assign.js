//swap two variable using third variable
console.log("Program-01");
var sweety ="Sweety";
var cutie = "Cutie";
console.log("Before Swaaping code");
console.log("sweety = "+ sweety);
console.log("cutie = "+ cutie);
var temp;
temp=sweety;
sweety=cutie;
cutie=temp;
console.log("After Swaaping code");
console.log("sweety = "+ sweety);
console.log("cutie = "+ cutie);

//swap two variable using third variable
console.log("-------------------------------------------------------------");
console.log("Program-02");
var num1=100, num2=200, num3=300;
console.log("Before Swapping the Number = " + num1,num2,num3);
num1 = num1+num2+num3;
num2 = num1-(num2+num3);
num1 = num1-(num2+num3);
num2 = num3;
num3 = num3-num1;
console.log("After Swapping the Number = " + num1,num2,num3);



