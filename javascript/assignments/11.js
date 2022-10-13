let a = -10;
let b = -370;
let c = -0.01;
if ((a <= b) && (a <= c) && (b <= c)) { 
    console.log(a, b, c);} 
    else if ((a <= c) && (a <= b) && (c <= b)) 
{
     console.log(a, c, b); }
 else if ((b <= c) && (b <= a) && (c <= a)) 
 { 
    console.log(b, c, a) } 
 else if ((b <= a) && (b <= c) && (a <= c))
{
    console.log (b,  a,c);}
else if((c<=a)&&(c<=b)&&(a<=b)) {
    console.log(c  ,a,b);
} 
else {console.log(c,b,a)}