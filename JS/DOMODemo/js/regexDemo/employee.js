class Employee {
    // class : its a predefined keyword used to define/declear the class. 
    // Employee : Name of the class
 
empId = ""
empName = "";
empSalary = 1000;
constructor (eId , eName, eSalary) {
this.empID = eId; 
this.empName = eName;
this.empSalary = eSalary;
console.log(" hello from constructor");
    // DC initialition of fields.
    // parameterized constructor
    // it is used to initialize the fields on hte basis of passed values to constructor. 

}
}

// let: to declear the variable.
// employee : name of the variable.
// new : new it is a keyword used to define/declear the object.
// Employee() :


let employee = new Employee(100, "ahmed" , 200); 
console.log(employee);
employee.empId = "1234";
employee.empName = "Ahmed";
employee.empSalary = 1000; 

console.log(employee);
console.log(employee.empId);



class CRUDEmployee {
    employees= [];
    //employees : will hold an array of employees. 
    addEmployee =(employee) => {
        let res =this.employees.push(employee);
        console.log("return from push" + res);
        if(res == 1){
return "success";
        }else{
            return "fail";
        }
    
}; 

        updateEmployee =(eId, employee)=>{}; 
            deleteEmployeebyId =(eId)=>{}; 
        }
let crudemp= new CRUDEmployee();

let result = crudemp.addEmployee(new Employee(1, "ahmed", 200));
console.log(result);
if(result == "success"){
console.log('employee added successfully');
}
else{
    console.log('employee not added');
}

