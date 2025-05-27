//function declaration
//function is a block of code that performs a specific task
function Hello()
{
   //function body
    console.log('Hello World..');
}
//calling function
Hello();
//function with parameters
function Greet(name)
{
    Hello(); //calling another function inside this function
    console.log(`Hello ${name}`)

}
Greet('Sachin');
Greet('Rahul');
//function with 2 parameters
function Add(a,b)
{
    let result=a+b;
    console.log(`${a}+${b}=${result}`)
}
Add(3,5);
//function with default parameter value
function Sum(a,b=10) //defaut value of b=10
{
    let result=a+b;
    console.log(`${a}+${b}=${result}`)
}
Sum(12);// calling with one parameter, b will take default value 10
Sum(13,20); // calling with both parameters, b will take value 20