let numbers=[12,23,34,45,56,67,78];
//access all array elements
for(let i=0;i<numbers.length;i++)
{
    console.log(numbers[i]);
}
console.clear();
//i represents the index of the array
//for...in loop
for(let i in numbers)
{
    console.log(numbers[i]);
}
console.clear();
//i represents the value of the array
//for...of loop
for(let i of numbers)
{
    console.log(i);
}