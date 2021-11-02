// create simple functions for adding, subtracting, multiplying, dividing

function add(num1, num2) {
  let result = num1 + num2;
  return result;
}

function subtract(num1, num2) {
  let result = num1 - num2;
  return result;
}

function multiply(num1, num2) {
  let result = num1 * num2;
  return result;
}

function divide(num1, num2) {
  let result = num1 / num2;
  return result;
}

// create function operate() that takes two numbers and an operator
// function operate() calls one of the basic functions and applies to the numbers entere
// press = key to call operate()

function operate(num1, num2, operator) {
  if (operator == "+") {
    return add(num1, num2);
  } else if (operator == "-") {
    return subtract(num1, num2);
  } else if (operator == "*") {
    return multiply(num1, num2);
  } else if (operator == "/") {
    return divide(num1, num2);
  }
  console.log("operate function called");
}

console.log(operate(1, 2, "*"));

// clicking number button stores value in variable num1
const firstClicked = document.querySelector("btn");
firstClicked.addEventListener("click", save as num1);

// clicking operator button stores choice in variable op
const op = document.querySelector("btn");
op.addEventListener("click", save as op);

// clicking next number button stores value in variable num2
const secondClicked = document.querySelector("btn");
secondClicked.addEventListener("click", save as num2);

// clicking = calls operate() on the input values
const equalBtn = document.querySelector("#equalBtn");
equalBtn.addEventListener("click", operate);

// if num1 + operator + num2 have already been entered- clicking any operator will display currentTotal

// currentTotal is then used as next num1 of new calculation

// round answers with long decimals to fit on the screen

// resultsDiv should display the numbers and operator as they are entered
// update to display solution after = is pressed

// add clear button that clears resultsDiv & all data

// ERROR message if user tries to divide by 0

// BONUS: add . to let users input decimals. Only allow one . per number
// BONUS: add a backspace button to delete the last character entered in display
// BONUS: add keyboard support
