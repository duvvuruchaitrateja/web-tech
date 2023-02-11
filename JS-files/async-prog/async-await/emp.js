let employees=[{id:101,name:"sjs",sal:45000},{id:102,name:"ddd",sal:55000}]
let createEmployee=(emp)=>{
    setTimeout(()=>{
        employees.push(emp)
        get_Employees()
    },[4000])
}
let get_employees=()=>{
    setTimeout(()=>{
        let rows=""
        for(emp of employees){
            rows=rows+<tr>
            <td>${emp.id}</td>
            <td>${emp.name}</td>
            <td>${emp.sal}</td>
            </tr>
        }
        document.getElementById('tbody_data').innerHTML="rows"
    },[1000])
}
let dummy=async()=>{
    await createEmployee({id:101,name:"tej",sal:28000})
}
dummy()