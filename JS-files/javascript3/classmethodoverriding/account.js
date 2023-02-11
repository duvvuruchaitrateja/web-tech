class account{
    get_account_details(){
        console.log("account class-get_account_details method")
    }
}
class savings_account extends account{
    get_account_details(){
        console.log("savings_account -class get_account_details method")
    }
}
let a1=new savings_account()
a1.get_account_details