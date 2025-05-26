//javascript loops
// for loop
for (let i = 0; i < 5; i++) {
    console.log("Iteration number: " + i);
}
// while loop
let count = 0;
while (count < 5) {
    console.log("Count is: " + count);
    count++;
}
// do-while loop
let index = 0;
do {
    console.log("Index is: " + index);
    index++;
} while (index < 5);
// for...in loop
let person = { name: "Alice", age: 30, city: "New York" };
for (let key in person) {
    console.log(key + ": " + person[key]);
}
// for...of loop
let fruits = ["Apple", "Banana", "Cherry"];
for (let fruit of fruits) {
    console.log("Fruit: " + fruit);
}
// nested for loop
for (let i = 0; i < 3; i++) {
    for (let j = 0; j < 2; j++) {
        console.log("i: " + i + ", j: " + j);
    }
}
// break statement
for (let i = 1; i < 1000; i++) {
    if (i % 7 == 0 && i % 5 == 0) {
        console.log("Found the number: " + i);
        break; // Exit the loop when the condition is met
    }
}
// continue statement
for (let i = 1; i < 1000; i++) {
    if (i % 2 == 1)
        continue; // Skip the odd numbers
    console.log("Even number: " + i);
    if (i === 100)
        break; // Exit the loop when i is 100
}
