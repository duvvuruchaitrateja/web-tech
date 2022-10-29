class account{
    min_bal=500;
    open_account(){
        console.log(" account opened succesfully")
    }
    deposit_amount(){
        console.log("deposit successfully")
    }
    get_st(){
        console.log("printer is not working")
    }
    get_bal(){
        console.log("server is busy")
    }
    withdrawl_amount(){
        console.log("insufficient balance")
    }
    close_account(){
        console.log("closed immediately")
    }
}
let a1=new account();
console.log(a1)
console.log(a1.min_bal)
a1.open_account()
a1.deposit_amount()
a1.get_st()
a1.get_bal()
a1.withdrawl_amount()
a1.close_account