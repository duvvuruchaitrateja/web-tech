class account {
    min_bal=500;
    get_account_details(){
        console.log("account details are displaying")
    }
}
class savings_account extends account{
    deposit_amount(amount){
        console.log(this.min_bal+amount)
    }
}
let a1=new savings_account();
a1.get_account_details();
console.log(a1)
a1.deposit_amount(1500)
class current_account extends account {
    min_bal=10000
    deposit_amount(amount){
        console.log(this.min_bal+amount)
    }
}
    let a2=new current_account()
    console.log(a2)
    a2.get_account_details()
    a2.deposit_amount(50000)


