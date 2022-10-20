let teacher = {
    TeacherName: "Dhananjay Madekar",
    Age: 33,
    MobileNumber: 9999999999,
    address: "Pune",
    pincode: 411057,
    degrees: {
        enggineering: "CSE",
        PHD: "Adv Computing",
        MBA: "Sales and Marketing"
    },
    certificates: {
        certificat1: "Hacker rank Participation",
        certificat2: "certificate in IFE Course",
        certificat3: "certificate in advance programming"
    },
    concatDegree: function(){
        let totaldegree = `Teachers degrees are: ${teacher.degrees.enggineering}, ${teacher.degrees.PHD}, ${teacher.degrees.MBA}`;
        return totaldegree;
    }

}
console.log("----------All data of teacher ------------------");
console.table(teacher);
console.log("----------Concat total degrees of teacher ------------------");
console.log(teacher.concatDegree());
console.log("----------add new property on object ------------------");
teacher.teacherhight= 55
console.table(teacher);
console.log("----------update property on object ------------------");
teacher.teacherhight= 100
console.table(teacher);
console.log("----------delete property on nested object ------------------");
delete teacher.certificates.certificat1
console.table(teacher);
console.log("----------Add property on nested object ------------------");
teacher.certificates.certificat4 = "Codmind national level event 'COde Tech'"
console.table(teacher);
console.log("----------log the certificates only in nested object ------------------");
console.table(teacher.certificates);




