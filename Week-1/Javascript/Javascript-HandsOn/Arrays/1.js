//array declaration
let arr = [1, 2, 3, 4, 5];
console.log(arr); // Output: [1, 2, 3, 4, 5]    
console.log(arr[1]); // Output: 2
//array length
console.log(arr.length); // Output: 5
for (let k of arr) {
    console.log(k);
}
//array methods
// push method
arr.push(6);
console.log(arr); // Output: [1, 2, 3, 4, 5, 6]
// pop method
arr.pop();
console.log(arr); // Output: [1, 2, 3, 4, 5]
// unshift method
arr.unshift(0);
console.log(arr); // Output: [0, 1, 2, 3, 4, 5]
// shift method
arr.shift();
console.log(arr); // Output: [1, 2, 3, 4, 5]
// concat method
let arr2 = [6, 7, 8];
let arr3 = arr.concat(arr2);
console.log(arr3); // Output: [1, 2, 3, 4, 5, 6, 7, 8]
// slice method
let slicedArr = arr.slice(1, 4);
console.log(slicedArr); // Output: [2, 3, 4]