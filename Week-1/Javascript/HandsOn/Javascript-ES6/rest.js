// function sum(a) {
//     let sum = 0;
//     for (let k of a) {
//         sum = sum + k;
//     }
//     console.log(sum);
// }
// sum([12,23,34,45])
function add(a, b) {
    return a + b;
}
function sum(...a) // Using rest operator to accept variable number of arguments
{
    let sum = 0;
    for (let k of a) {
        sum = sum + k;
    }
    console.log(sum);
}
add(12, 23);
sum(12,23,34,45,56);
sum(12,23,34,45,56,67,78,89,90,100);
sum(12,23,34,45,56,67,78,89,90,100,111,122,133,144,155,166,177,188,199);