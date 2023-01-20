// Write your solution in this file!
const employee = { 
name: "niceName",
streetAddress: "niceAddress",  
};
function updateEmployeeWithKeyAndValue( employee, key, value) {
    const newObject = {...employee};
    newObject[key] = value;
    return newObject;
}
function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value) {
employee[key] = value;
return employee;
}
function deleteFromEmployeeByKey(employee, key) {
   const newEmployee = {...employee};
   delete newEmployee[key];
   return newEmployee;
}
function destructivelyDeleteFromEmployeeByKey(employee, key) {
    delete employee[key];
    return employee;
}