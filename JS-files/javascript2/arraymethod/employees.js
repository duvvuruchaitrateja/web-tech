let employees=[{id:101,name:"rahul",sal:45000},{id:102,name:"sonia",sal:45000}]
function createemployee(emp){
    employees.push(emp)
}
createemployee({id:102,name:"priyanka",sal:65000});
console.log(employees)