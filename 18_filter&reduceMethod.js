class Employee{
    constructor(emp_id,emp_name,emp_dept,emp_salary,emp_company){
        this.emp_id = emp_id;
        this.emp_name = emp_name;
        this.emp_dept = emp_dept;
        this.emp_salary = emp_salary;
        this.emp_company = emp_company;
    }
}

const emp_anil = new Employee(22,"Anil","IT",50000,"TCS");
const emp_radha = new Employee(33,"Radha","HR",74000,"Wipro");
const emp_rishi = new Employee(55,"Rishi","Finance",47000,"TCS");
const emp_sonali = new Employee(66,"Sonali","Finance",45000,"Infy");
const emp_monika = new Employee(77,"Monika","IT",40000,"Wipro");
const emp_viny = new Employee(88,"Vinayak","IT",75000,"TCS");
const emp_mahi = new Employee(99,"Mahesh","HR",85000,"Infy");

var arrayOfEmployee = [emp_anil,emp_radha,emp_rishi,emp_sonali,emp_monika,emp_viny,emp_mahi];

console.log("------Find all the employees from Wipro company----------");
arrayOfEmployee.filter((Employee)=>{
     if(Employee.emp_company == "Wipro"){
        console.log(`Employee Name : ${Employee.emp_name}, Employee dept: ${Employee.emp_dept}, Employee Company: ${Employee.emp_company}`);
     }
});

console.log("------. Find all the employees from IT OR HR dept----------");
arrayOfEmployee.filter((Employee)=>{
     if(Employee.emp_dept == "IT" || Employee.emp_dept == "HR"){
        console.log(`Employee Name : ${Employee.emp_name}, Employee dept: ${Employee.emp_dept}`);
     }
});

console.log("------Find all the employees whose emp ids are greater than 50----------");
arrayOfEmployee.filter((Employee)=>{
    if(Employee.emp_id >= 50){
       console.log(`Employee ID: ${Employee.emp_id},Employee Name : ${Employee.emp_name}, Employee dept: ${Employee.emp_dept}`);
    }
});

console.log("------Find all the employees whose names start with letter A or V or M----------");
arrayOfEmployee.filter((Employee)=>{
    if(Employee.emp_name.startsWith("A") || Employee.emp_name.startsWith("V" || Employee.emp_name.startsWith("M")) ){
       console.log(`Employee Name : ${Employee.emp_name}, Employee dept: ${Employee.emp_dept}`);
    }
});

console.log("------Find the average salary of the employee for all the department----------");
let Total = 0;
arrayOfEmployee.filter((Employee,index)=>{
    if (Employee.emp_salary) {
        Total = Employee.emp_salary + Total;
    }
})
console.log(Total/arrayOfEmployee.length);

console.log("------. Find the average salary for IT department----------");
let ITEmployee = arrayOfEmployee.filter((Employee)=>{
   return Employee.emp_dept == "IT";
});
let Total1 = 0;
ITEmployee.filter((Employee,index)=>{
    if (Employee.emp_salary) {
        Total1 = Employee.emp_salary + Total1;
    }
})
console.log(Total1/arrayOfEmployee.length);






















