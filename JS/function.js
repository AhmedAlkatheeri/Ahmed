// const to change the value 
// const addition = (a,b) => a + b;
// let res = addition(10,20); 
// console.log (res);

// const sub = (a,b) => a - b;
// let res2 = sub(10,20); 
//console.log (res2);
 
//const maxNumber = (a,b,c) => {
  //  if (a > b && a> c ) return a; 
    //else if (b > a && b> c) return b;
    //else return c;
//}
//let result3 = maxNumber (8,9,5);
//console.log (result3) 

const fact = (a) => {
    let r = 1;
    for ( let i = 1; i<=a; i ++)
   { r = r * i; }
return r;
}

let result = fact(5);
console.log(result); 