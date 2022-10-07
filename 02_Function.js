function advika(){
    console.log("My name is Advika");
    console.log("Advika B'day is on 12/01/2021");
    console.log("-------------------------------");
}
advika();

function advikaSport(){
    console.log("I am intrested to play cricket");
    console.log("My age is 1 yr");
    console.log("-------------------------------");
}
advikaSport();

function fullName(arg1,arg2){
    console.log(arg1+" "+ arg2);
}
fullName("kapil", "Jundale");

//Swap the two number or string
function swap_values(arg3,arg4){
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


//Add the three number or string and return
function add_three_number(arg5,arg6,arg7){
    console.log("-------------------------");
    var add = arg5+arg6+arg7;
    console.log("Addition of three Number is = " + add);
    return add;
}
add_three_number(10,20,30);
add_three_number(10.23,600,40);
add_three_number("Hello ","Good ","Morning ")
