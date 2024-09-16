 // NAME: Preston Akmeemana
 // DATE: September 16th, 2024
 // TITLE: Calculator for Two Numbers

operation = prompt("What operation do you want to use? (+, -, /, or *)")

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
} else alert("");

console.log(result);



/* Setting a number for x and a letter for y results in NaN but is different vice versa. 

If the program reads the first number as an integer, the proper error message appears, but
if x is an integer while y is not, NaN appears*/

