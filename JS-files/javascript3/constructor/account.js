class account{
    constructor(id,name,amount){
        this.acc_id=id;
        this.acc_name=name;
        this.acc_amount=amount;
    }
    get_account_bal(){
        return this.acc_amount;
    }
}
let a1=new account(101,"tej",45000)
console.log(a1)
console.log(a1.get_account_bal())
let a2=new account(102,"har",55000)
console.log(a2)
console.log(a2.get_account_bal())