
function gradeSystem(arg){
    console.log("------------------------------------------------------------------------");
    var Score = arg;
    if (Score==null || Score==undefined) {
       console.log("invalid input null or undefined"); 
    } else  if (typeof Score==='string') {
        console.log("invalid input string format"); 
     } else if (Score<=0 || Score>100) {
        console.log("Invalid Score");    
    } else if (Score<35) {
        console.log("You are Failed");
    } else if (Score>=35 && Score<60) {
        console.log("Passed and GRADE is 'C'");
    }else if (Score>=60 && Score<75) {
        console.log("Passed and GRADE is 'B'");
    }else if (Score>=75 && Score<90) {
        console.log("Passed and GRADE is 'A'");
    }else if (Score>=90 && Score<100) {
        console.log("Passed and GRADE is 'A+'");
    }else if (Score>=35) {
        console.log(" You are Passed");
    }
    
}
gradeSystem(66);
gradeSystem(13);
gradeSystem("");
gradeSystem(98);
gradeSystem("Fifty Five")
gradeSystem(35);
gradeSystem(75);
gradeSystem(null);
gradeSystem(undefined);
gradeSystem(-20);
gradeSystem(55);
gradeSystem(82);




