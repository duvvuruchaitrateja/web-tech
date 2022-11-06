let goToMovie=(success,failure)=>{
    let amount=100;
    if(amount>600){
        success("go to kanatara movie with popcorn")
    }else{
        failure("go to pg and sleeping")
    }
}
goToMovie((msg)=>{
    console.log(msg)
},(err)=>{
    console.log(err)
})