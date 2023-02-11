let employee=[{id:101,name:"tej",sal:45000,},{id:102,name:"jet",sal:50000}]
let createEmployee=(emp)=>{
    return new Promise((resolve,reject)=>{
     setTimeout(()=>{
        let flag=true
        flag ? resolve("data inseted successfully"): reject("data failed")
        employees.push(emp)
     },4000)
    });
}
let get_employees=()=>{
    setTimeout(()=>{
        let rows=""
        for(emp of employees){
            rows= rows + <tr>
            <td>${emp.id}</td>
            <td>${emp.name}</td>
            <td>${emp.sal}</td>
            </tr>
        }
    },1000)
}
createEmployee({id:103,name:"priyanka",sal:65000})
.then((msg)=>{
    console.log(msg)
    get_Employees()
})
.catch((err)=>{
    console.log(err)
})