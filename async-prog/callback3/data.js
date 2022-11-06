let employees=[{id:101,name:"teja",sal:25000},{id:102,name:"harika",sal:35000}]

let createEmployee=(emp,callback)=>{
    setTimeout(()=>{
        employees.push(emp),
        callback()

    },4000);

}
let get_Employees=()=>{
    setTimeout(() => {
        let rows=""
        for(emp of employees){
            rows=rows + <tr> 
                        <td>${emp.id} </td>
                        <td>${emp.name}</td>
                        <td>${emp.sal}</td>
            
                        </tr>
        }
        document.getElementById('tbody_data').innerHTML=rows
        
    }, 1000);
}
createEmployee({id:103,name:"teja reddy",sal:55000},get_Employees)