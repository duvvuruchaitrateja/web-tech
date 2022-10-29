class account{
    constructor(name,email){
        this.acc_name=name
        this.acc_email=email
    }
}
class savings_account extends account{
    constructor(id,name,email,amount){
        super(name,email)
        this.acc_id=id
        this.acc_amount=amount
    }
}
let a1=new savings_account(10,"teja",'tej@gmail.com',4000)
let a2=new savings_account(20,"jy0",'jyo@gamil.com',45000)
console.log(a1)
console.log(a2)