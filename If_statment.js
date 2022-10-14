var tcsEligibilityCheck = function (grad_score, hsc_score, ssc_score, candidate_name) {
    console.log(grad_score >= 70 );
        var result = grad_score >= 70 || hsc_score >= 80 || ssc_score > 90  // false || true
            ? `Congrates ${candidate_name} you are eligible for TCS interview`
            : "Unfortunately you are not eligible for interview";
        console.log(result);
    }
    tcsEligibilityCheck(80, 86, 90, "Mohit Sharma");
    tcsEligibilityCheck(69, 65, 95, "Anil Pende");
    
    
    var myResult = 0/0;
    console.log(myResult);
    console.log(typeof myResult);
    
    var myName = "TEST";
    var myAge = "31";
    console.log(typeof myName);
    console.log(typeof myAge);
    
    var myAgeInNumber = +myAge; 
    console.log(myAgeInNumber, typeof myAgeInNumber);
    
    var myNameString =  +myName
    console.log(myNameString, typeof myNameString);
    
    
    var rating = 3;
    var isAssigComplete = false;
    
    if(rating>=3 && isAssigComplete==true){
        console.log("you are good, Excellent");
    }