// let a = +prompt('Write first number');
// let b = +prompt('Write second number');
// let res = 1;
// let check = false;
// if(b!=0){
//     if(b<0){
//         b = -b;
//         check = true
//     }
//     for (let i=1; i<=b; i++){
//         res = res * a;
//     }
//     if(check){
//         res = 1/res
//     }
// }
// alert(res);


let a = +prompt('Write first number');
let b = +prompt('Write second number');
let res = 1;
if(b!=0){
    for (let i=1; i<=Math.abs(b); i++){
        res = res * a;
    }
    if(b<0){
        res = 1/res
    }
}
alert(res);