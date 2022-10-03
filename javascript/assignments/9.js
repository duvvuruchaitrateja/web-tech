let a = 345676;
let b = 345;
let c = 345;
if ((a <= b) && (a <= c)) {
    console.log(a);

} else if ((b <= c) && (b <= a)) {
    console.log(b);
} else if ((c <= a) && (c <= b)) {
    console.log(c);
}