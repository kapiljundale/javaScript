console.log("--------Sample program for ForEach on map-----------");
const map = new Map();
map.set(11,"Anil");
map.set(22,"Sunil");
map.set(33,"Radha");
map.set(44,"Rani");

map.forEach((key,value)=>{
console.log(key,value);
});

console.log("---------Assignment on Map----------");
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

const map_employee = new Map();
map_employee.set(22,emp_anil);
map_employee.set(33,emp_radha);
map_employee.set(55,emp_rishi);
map_employee.set(66,emp_sonali);
map_employee.set(77,emp_monika);
map_employee.set(88,emp_viny);
map_employee.set(99,emp_mahi);

map_employee.forEach((key, value)=>{
    console.log(`Employee Id : ${value}, Employee Name:${key.emp_name}, Department:${key.emp_dept}, Company:${key.emp_company}, Salary:${key.emp_salary}`);
})


