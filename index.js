 // NAME: Preston Akmeemana
 // DATE: September 16th, 2024
 // TITLE: Calculator for Two Numbers

operation = prompt("What operation do you want to use? (+, -, /, *, sqrt, or ^)")

let x = prompt("What is x?");
let y = prompt("What is y?");

x = parseFloat(x);
y = parseFloat(y);

let result;

if (!Number.isInteger(x)) {
    alert("Please enter a valid integer for x");
}   

if (!Number.isInteger(y)) {
    alert("Please enter a valid integer for y");
}   

if (operation == "+") {
    result = x + y;
} else if (operation == "-") {
    result = x - y;
} else if (operation == "*") {
    result = x * y;
} else if (operation == "/") {
    result = x / y;
} else if (operation == "sqrt") {
    result = Math.sqrt(x, y);
}

if (Number.isInteger(result)) {
    alert(result);
} else console.log(result);






