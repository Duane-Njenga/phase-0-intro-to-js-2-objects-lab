// Write your solution in this file!
let employee = {
    name: "Robert",
    streetAddress:"Nairobi",
}



function updateEmployeeWithKeyAndValue(obj, key, value){
    return{ 
        ...employee,
        [key]: value,
    };
}
let newEmployee = updateEmployeeWithKeyAndValue (employee, "name", "Sam")
newEmployee = updateEmployeeWithKeyAndValue (employee, "streetAddress", "11 Broadway")

function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value){
    employee[key]= value;
    return employee;
}

const employees = destructivelyUpdateEmployeeWithKeyAndValue(employee, "streetAddress", "12 Broadway");
console.log(employees);

function deleteFromEmployeeByKey(employee, key){
    newEmployees ={...employee};
    delete newEmployees[key];
    return newEmployees;
   
}
let newEmployees = deleteFromEmployeeByKey(employee, "name")

function destructivelyDeleteFromEmployeeByKey(employee, key){
    delete employee[key];
    return employee;
   
}
let Employee = destructivelyDeleteFromEmployeeByKey(employee, "name")
