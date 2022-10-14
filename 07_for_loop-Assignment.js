console.log("-----WAP to print number from 5 to 15 by incremating by 1-----"); 

for (let a = 5; a <= 15; a++) {
    console.log(a);
}

console.log("-----WAP to print number from 50 to 40 by decremating by 1-----"); 

for (let b = 50; b >= 40; b--) {
    console.log(b);
}

console.log("-----WAP to find first 15 odd number-----"); 
var count=0;
for (let c = 0; c <= 40; c++) {
    if(c%2!==0){
        console.log(c);
        count = count +1
        if(count==15){
                break;
        }
    }
}

console.log("-----WAP to find first 10 even number-----"); 
var count=0;
for (let d = 0; d <= 40; d++) {
    if(d%2==0){
        console.log(d);
        count = count +1
        if(count==10){
                break;
        }
    }
}

console.log("-----WAP to print table of 5-----"); 

for (let e = 5; e <= 50; e=e+5) {
    console.log(e);
}

console.log("-----WAP to print table of 10-----"); 

for (let f = 10; f <= 100; f=f+10) {
    console.log(f);
}

console.log("-----WAP to print table of 10 in reverse-----"); 

for (let g = 100; g >= 10; g=g-10) {
    console.log(g);
}






