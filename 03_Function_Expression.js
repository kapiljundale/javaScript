//function Expression to get square of two number
console.log("----------Square of two Number------------- ");
var square = function(arg1){
    var mult = arg1*arg1;
    console.log(mult);
}
square(5);
square(6);
square(25);
square(100);

console.log("--------------------------------- ");

//check type of function
console.log("Type of function is =" + typeof square);
console.log("--------------------------------- ");

//function expression to get area of triangle

var triangleArea = function(base,hight){
    var area=1/2*(base*hight);
    console.log("Total Triangle Area is =" + area);
    console.log("--------------------------------- ");
}
triangleArea(45,34);

//function expression to get area of rectangle

var rectangleArea = function(length,width){
    var rarea=length*width;
    console.log("Total Rectangle Area is =" + rarea);
    console.log("--------------------------------- ");
}
rectangleArea(499,917);

//function expression to swap the two numbers

var swap_values = function(arg3,arg4){
    console.log("--------Before Swap---------");
    console.log(arg3,arg4);
    var temp = arg3;
    arg3=arg4;
    arg4=temp;
    console.log("--------After Swap---------");
    console.log(arg3,arg4);
    }
    swap_values("Virat","Anushka");
    swap_values("1000","2000");
