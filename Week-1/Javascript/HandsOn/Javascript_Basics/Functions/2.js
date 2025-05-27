//functions with parameters and return values
function Square(n) {
    let result = n * n;
    return result;// return the result
}
let r = Square(5); // calling the function with parameter 5
function Greet(name) {
    let message = 'Hello ' + name;
    return message;
}
function IsEven(number) {
    let isEven = number % 2 == 0 ? true : false;
    return isEven;
}
let result = Square(10);
console.log(result);
result = Greet('Dhoni');
console.log(result);
console.log(IsEven(110) == true ? 'Even' : 'Odd');
