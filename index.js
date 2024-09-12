
let x = prompt("What is x?");
let y = prompt("What is y?");

x = parseFloat(x);
y = parseFloat(y);

sum = x + y;
difference = x - y;
product = x * y;
quotient = x / y;

function addNumbers(num1, num2) {
    const result = num1 + num2;
    return result;
}

const numberAdd = addNumbers(num1, num2);
console.log(numberAdd);

function subtractNumbers() {
    const result = num1 - num2;
    return result;
}

const numberSubtract = subtractNumbers(num1m, num2);
console.log(numberSubtract);

function divideNumbers() {
    const result = num1 / num2;
    return result;
}

const numberDivide = divideNumbers(num1, num2);

function multiplyNumbers() {
    const result = num1 * num2
    return result;
}

const numberMultiply = multiplyNumbers(num1, num2);
console.log(numberMultiply);
