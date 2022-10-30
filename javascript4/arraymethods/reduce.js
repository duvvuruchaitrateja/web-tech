let value=[1,2,3,4,5].reduce((a,b)=>{
    return a+b})
console.log(value)
let total_price=[{price:500,id:'p101'},{price:1500,id:'p102',},{price:2500,id:'p103'}].reduce((a,b)=>{
    return a.price+ b.price
})
console.log(total_price)