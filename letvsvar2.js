let a = 10;
var b = 20;
let x = 100;
var y = 100;
function scope() {
    let a = 2; //new 
    var b = 4; //new
    y = 50; //overwrite
    console.log(a+b+x+y);
}
console.log(a+b+x+y); //230
scope(); //calling of function
console.log(a+b+x+y); //180

// let a=10,b=20;
// var c=30;
// console.log(a+b+c);
// {
//     let a=1;
//     let z=100;
//     b=2;
//     var c=3;
//     console.log(a+b+c+z);
// }
// console.log(a+b+c+z); //z is not define
// //          10+2+3 
