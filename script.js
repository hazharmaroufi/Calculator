let firstNumber = "";
let lastNumber = "";
let operator = "";

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
  let result = "0";
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

const the__0 = document.querySelector("#the__0");
const the__1 = document.querySelector("#the__1");
const the__2 = document.querySelector("#the__2");
const the__3 = document.querySelector("#the__3");
const the__4 = document.querySelector("#the__4");
const the__5 = document.querySelector("#the__5");
const the__6 = document.querySelector("#the__6");
const the__7 = document.querySelector("#the__7");
const the__8 = document.querySelector("#the__8");
const the__9 = document.querySelector("#the__9");

const the__add = document.querySelector("#the__add");
const the__subtract = document.querySelector("#the__subtract");
const the__multiply = document.querySelector("#the__multiply");
const the__divide = document.querySelector("#the__divide");
const the__equal = document.querySelector("#the__equal");
const the__clear = document.querySelector("#the__clear");
const result = document.querySelector(".result");
const selectors = document.querySelectorAll(".selector");

result.textContent = 0;
function display(led) {
  result.textContent = led
}

// سلکتور رو وقتی کلیک میکنیم نمایش میده و اجرا میکنه
selectors.forEach(selector => {
  selector.addEventListener("click", () => {
    operator = selector.value;
    display(operator)
  })
})

const theNumbers = document.querySelectorAll(".num");
theNumbers.forEach(number => {
  number.addEventListener("click", () => {
    if (!operator) {
      firstNumber += number.value;
      display(firstNumber)
    } else {
      lastNumber += number.value;
      display(lastNumber)
    }
  });

});

the__equal.addEventListener("click", () => {
  let finalResult = operate(operator, firstNumber, lastNumber);
  let roundedFinalResult = Math.round(finalResult * 10) / 10
  display(roundedFinalResult);
})

the__clear.addEventListener("click", () => {
  result.textContent = "0";
  firstNumber = "";
  lastNumber = "";
  operator = "";
})



