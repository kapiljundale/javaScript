
console.log("----------- with no argument and no return value using arrow function--------------");
let show = ()=> {
    console.log("Good Evening Today is Sunday");
}
show();

console.log("----------- Multiplication with 3 argument and no return value using arrow function--------------");
let Multiplication = (a,b,c)=> a*b*c;
console.log(Multiplication(5,5,2));

console.log("-----------Multiplication with 3 argument and default value using arrow function--------------");
let MultiplicationWithDefultValue = (d,e,f=5)=> d*e*f;
console.log(MultiplicationWithDefultValue(10,4));


console.log("----------- addition with 5 argument and no return value using arrow function--------------");
let Addition = (a,b,c,d,e)=> a+b+c+d+e;
console.log(Addition(100,100,200,349,756));
console.log(Addition("I am"," learning"," ES6"," features"," in depth"));

