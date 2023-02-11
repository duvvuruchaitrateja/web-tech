let employees = [
    { id: 101, name: "Rahul", sal: 45000 },
    { id: 102, name: "Sonia", sal: 55000 },
    { id: 103, name: "Priyanka", sal: 65000 },
    { id: 104, name: "Priyanka", sal: 65000 },
    { id: 105, name: "Priyanka", sal: 65000 }
]
function display_Data() {
    let rows = ""
    for (emp of employees) {
        rows = rows + `<tr>  
                        <td>${emp.id=101}</td>
                        <td>${emp.name="teja"}</td>
                        <td>${emp.sal=35000}</td>
                     <tr>`
    }
    document.getElementById('abc').innerHTML = rows
}