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
  console.log(operate);
}

// console.log(operate(1, 2, "*"));

// need to know current operator
let enteredNumber = "";
let currentOperator = null;

let num1 = 0;
let num2 = 0;

// resultsDiv displays numbers and operator as they are entered
document.querySelector("#btnContainer").addEventListener("click", (event) => {
  let target = event.target;

  if (target.matches(".btn.num")) {
    let value = target.innerHTML;
    enteredNumber += value;
    document.querySelector("#output").value = enteredNumber;
    console.log(enteredNumber);
  } else if (target.matches(".btn.op")) {
    let n = parseInt(enteredNumber);
    if (currentOperator == null) {
      num1 = n;
    } else {
      num2 = n;
    }
    enteredNumber = 0;

    currentOperator = target.innerHTML;
    document.querySelector("#output").value = currentOperator;
    console.log(currentOperator);
  }
  console.log({ num1, num2, enteredNumber });
});

// // clicking number button stores value in variable num1
// document.querySelector("#btnContainer").addEventListener("click", (event) => {
//   let firstClicked = event.target;
//   if (firstClicked.matches(".btn.num")) {
//     let num1 = firstClicked.innerHTML;
//     console.log(num1);
//   }
// });
// // const firstClicked = document.querySelector("btnContainer");
// // firstClicked.addEventListener("click", save as num1);

// // // clicking operator button stores choice in variable op
// document.querySelector("#btnContainer").addEventListener("click", (event) => {
//   let operatorClicked = event.target;
//   if (operatorClicked.matches(".btn.op")) {
//     let op = operatorClicked.innerHTML;
//     console.log(op);
//   }
// });
// // const op = document.querySelector("btn");
// // op.addEventListener("click", save as op);

// // // clicking next number button stores value in variable num2
// document.querySelector("#btnContainer").addEventListener("click", (event) => {
//   let secondClicked = event.target;
//   if (secondClicked.matches(".btn.num")) {
//     let num2 = secondClicked.innerHTML;
//     console.log(num2);
//   }
// });
// const secondClicked = document.querySelector("btn");
// secondClicked.addEventListener("click", save as num2);

// clicking = calls operate() on the input values
const equalBtn = document.querySelector("#equalBtn");
equalBtn.addEventListener("click", operate);

// // update to display solution after = is pressed
// resultsDiv.textContent = "solution"

// // if num1 + operator + num2 have already been entered- clicking any operator will display currentTotal

// // currentTotal is then used as next num1 of new calculation

// // round answers with long decimals to fit on the screen

// add clear button that clears resultsDiv & all data
// reload the page? or is there better solution?
const clearBtn = document.querySelector("#clearBtn");
clearBtn.addEventListener("click", () => {
  document.location.reload();
});

// // ERROR message if user tries to divide by 0

// // BONUS: add . to let users input decimals. Only allow one . per number
// // BONUS: add a backspace button to delete the last character entered in display
// // BONUS: add keyboard support
