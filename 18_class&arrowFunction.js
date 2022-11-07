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

console.log("------find out TCS employee details and log on console");
arrayOfEmployee.forEach((Employee)=>{
   if (Employee.emp_company == "TCS") {
    console.log(`Company name is = ${Employee.emp_company},Employee name is = ${Employee.emp_name}`);
   }
});

console.log("------find out TCS employee whoes salary greater than 50000 and log on console-----------");
arrayOfEmployee.forEach((Employee)=>{
   if (Employee.emp_salary >= 50000) {
    console.log(`Company name is = ${Employee.emp_company},Employee name is = ${Employee.emp_name}, Employee salary is = ${Employee.emp_salary} `);
   }
});

console.log("------find out sum of all salary and log on console-------------");
var total =0;
arrayOfEmployee.forEach((Employee)=> {
   total = total + Employee.emp_salary;
});
console.log(`Total employee salary is = ${total}`);


console.log("------find average salary of employee------------");
var total =0;
var count=0;
arrayOfEmployee.forEach((Employee)=> {
   total = total + Employee.emp_salary;
   count ++;
});
console.log(`Average employee salary is = ${total/count}`);

console.log("------find IT and HR department employees whoes salary is greater than and equal to 75000------------");
arrayOfEmployee.forEach((Employee)=>{
    if (Employee.emp_dept == "IT" || Employee.emp_dept == "HR") {
        if (Employee.emp_salary >= 75000) {
            console.log(`Company name is = ${Employee.emp_company}, dept name is = ${Employee.emp_dept},Employee name is = ${Employee.emp_name}, Employee salary is = ${Employee.emp_salary} `); 
        }
    }
 });







