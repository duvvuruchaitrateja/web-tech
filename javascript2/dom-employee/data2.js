let employees=[
    {id:101, name:"teja", sal:10000},
    {id:102, name:"jyothish",sal:20000},
    {id:103, name:"anusha",sal:30000},
    {id:104, name:"srinivasulu", sal:40000}

]
function display_data(){
    let rows=""
    for(empl of employees){
        rows=rows+<tr>
        <td>${employee.id}</td>
         </tr>
    }
    document.getElementById('abc').innerHTML=rows
}