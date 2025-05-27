// let func=(arg1,arg2,....)=>expression
//const func=(arg1,arg2,....)=>expression
// Function expressions and arrow functions in JavaScript
//arrow functions
// Arrow functions are a more concise way to write function expressions in JavaScript.
// They are often used for short functions or when you want to preserve the context of `this`.
let Hello=()=>'Hello World' // Arrow function that returns a string
// This function does not take any parameters and returns a greeting message.
let result=Hello();
console.log(result);
let Greet=(n)=>{
    let message='Hello '+n;
    return message;
}
console.log(Greet('Sachin'));
console.log(Greet('Dhoni'));
let sum=(a,b)=>a+b; // Arrow function that takes two parameters and returns their sum
// This function is a simple addition function that takes two numbers and returns their sum.
console.log(sum(2,5));
let age=18;
let message=age>=18?()=>'you can vote':()=>'try next time'
console.log(message());
function f(f1,f2)
{
  //  console.log( f1()+' '+f2());
  return f1()+" "+f2();
}
result=f(()=>'Hello ',()=>'Tina')
console.log(result);
