const firstNumber = "";
const lastNumber = "";
const operator = "";

const add = function (a, b) {
  return Number(a) + Number(b);
}
const subtract = function (a, b) {
  return a - b;
}
const multiply = function (a, b) {
  return a * b;
}
const divide = function (a, b) {
  return a / b;
}

const operate = function (operator, firstNumber, lastNumber) {
  let result = "";
  if (operator === "+") {
    result = add(firstNumber, lastNumber);
  } else if (operator === "-") {
    result = subtract(firstNumber, lastNumber);
  } else if (operator === "*") {
    result = multiply(firstNumber, lastNumber);
  } else if (operator === "/") {
    result = divide(firstNumber, lastNumber);
  }
  return result;
}