

let x = prompt("What is x?");
let y = prompt("What is y?");

x = parseFloat(x);
y = parseFloat(y);

function addNumbers(num1, num2) {
    const result = num1 + num2;
    return result;
}

const numberAdd = addNumbers(x, y);

if (!Number.isInteger(Number(x, y))) {
    alert("Please enter a valid integer");
}   else {
    alert(numberAdd);
}