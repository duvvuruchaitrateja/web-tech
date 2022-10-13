let a=1223333;
let b=2344;
let c=36;
if(a>=b && a>=c && b>=c){
console.log(a,b,c)
}else if(a>=c && a>=b && c>=b){
    console.log(a,c,b)
}else if(b>=c && b>=c && c>=a){
    console.log(b,c,a)
}else if(b>=a && b>=c && a>=c){
    console.log(b,a,c)
}else if(c>=a && c>=b && a>=b){
    console.log(c,a,b)
}else{
    console.log(c,b,a)
}