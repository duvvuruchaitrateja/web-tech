class account{
    min_bal=500;
    amount;
    open_account(){
        console.log("account opened successfully")
    }
    deposit_amount(money){
        this.amount=money
    }
    get_bal(){
        return this.min_bal + this.amount
    }
}
let a1=new account();
a1.open_account();
a1.deposit_amount(1500);
console.log(a1.get_bal())
console.log("*****second object*****")
let a2=new account();
a2.open_account();
a2.deposit_amount(15000);
console.log(a2.get_bal())
