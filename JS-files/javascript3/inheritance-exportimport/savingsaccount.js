const account=require('./account.js')
class savings_account extends account{
    deposit_amount(amount){
        console.log(this.min_bal+amount)
    }
}
let a1=new savings_account();
a1.get_account_details()
console.log(a1)
a1.deposit_amount(1500)