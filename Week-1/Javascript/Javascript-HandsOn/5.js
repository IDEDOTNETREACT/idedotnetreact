//Javascipt condtional statements
// if statement
let age = 18;
if (age >= 18) {
    console.log("You are an adult.");
} else {
    console.log("You are a minor.");
}
// if-else statement
let score = 75;
if (score >= 60) {
    console.log("You passed the exam.");
} else {
    console.log("You failed the exam.");
}
// if-else if-else statement
let day = "Monday";
if (day === "Saturday" || day === "Sunday") {
    console.log("It's the weekend!");
} else if (day === "Monday") {
    console.log("It's the start of the week.");
} else if (day === "Friday") {
    console.log("It's almost the weekend.");
}
else {
    console.log("It's a regular weekday.");
}
// switch statement
let fruit = "Kiwi";
switch (fruit) {
    case "Apple":
        console.log("You chose an apple.");
        break;
    case "Banana":
        console.log("You chose a banana.");
        break;
    case "Orange":
        console.log("You chose an orange.");
        break;
    default:
        console.log("Unknown fruit.");
}
let ch = 'a';
switch (ch) {
    case 'a':
    case 'A':
    case 'e':
    case 'E':
        console.log('Vowel')
        break;
    default:
        console.log('Consonent')
        break;
}
// nested if statement
let temperature = 30;
if (temperature > 25) {
    console.log("It's warm outside.");
    if (temperature > 30) {
        console.log("It's hot outside.");
    } else {
        console.log("It's a nice day.");
    }
}
