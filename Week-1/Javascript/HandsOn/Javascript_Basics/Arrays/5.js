let numbers = [12, 3, 45, 56, 78];
numbers.push(56); //item added at last
console.log(numbers);
numbers.unshift(10); //item added at begining
console.log(numbers);
numbers.pop(); //last item removed
console.log(numbers);
numbers.shift(); //item remove from begining
console.log(numbers);
//splice
// let arr1=[23,45,67,78,89,90,12]
// console.log(arr1);
//
// let ar=arr1.splice(0,2); //remoted 2 items from 0th index
// console.log(ar); //ar will have the removed items
// console.log(arr1); //arr1 will have the remaining items
// arr1.splice(0,2,200,100); //removed first 2 items and replaced with 200,100
// console.log(arr1);

//slice
let arr1 = [23, 45, 67, 78, 89, 90, 12]
let arr2 = arr1.slice(1, 4);
//slice will not change the original array
console.log(arr1); //original array remains unchanged
console.log(arr2);

//concat
let arr3 = [23, 45, 67, 78, 89, 90, 12]
let arr4 = arr3.concat(100, 300)
console.log(arr4);

