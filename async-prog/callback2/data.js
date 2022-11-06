let employees=[{id:101,name:"teja",sal:45000},{id:102,name:"raja",sal:55000}]
let createEmployee=(emp)=>{
    setTimeout(()=>{
        employees.push(emp)
    },4000);
}
createEmployee({id:103,name:"harika",sal:60000})
let get_Employees=()=>{
    setTimeout(()=>{
        let rows=""
        for (emp of employees){
            rows=rows+<tr>
                      <td>${emp.id}</td>
                      <td>${emp.name}</td>
                      <td>${emp.sal}</td>
                      </tr>
        }
        document.getElementById('tbody_data').innerHTML=rows
    },1000)
}
get_Employees();
