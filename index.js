// create basic functions for adding, subtracting, multiplying, dividing
// display solution in resultsDiv
// round answers with long decimals to fit on the screen

function add(num1, num2) {
  let result = num1 + num2;
  result = Math.round(result * 100000) / 100000;
  return result;
}

function subtract(num1, num2) {
  let result = num1 - num2;
  result = Math.round(result * 100000) / 100000;
  return result;
}

function multiply(num1, num2) {
  let result = num1 * num2;
  result = Math.round(result * 100000) / 100000;
  return result;
}

function divide(num1, num2) {
  let result = num1 / num2;
  result = Math.round(result * 100000) / 100000;
  return result;
}

// create function operate() that takes two numbers and an operator
// operate() calls one of the basic functions and applies to the numbers entered
function operate(num1, num2, op) {
  if (op == "+") {
    return add(num1, num2);
  } else if (op == "-") {
    return subtract(num1, num2);
  } else if (op == "*") {
    return multiply(num1, num2);
  } else if (op == "/") {
    return divide(num1, num2);
  }
}

// set variables for entered numbers & operator
let enteredNumber = "";
let currentOperator = null;

let n1 = 0;
let n2 = 0;

function doTheMath() {
  const solution = operate(n1, n2, currentOperator);
  document.querySelector("#output").value = solution;
  console.log({ solution });
  n1 = solution;
}

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
      n1 = n;
    } else {
      if (n === 0) {
        console.log("ERROR"); //console.log works but #output value incorrect..
        document.querySelector("#output").value = "ERROR";
      } else {
        n2 = n;
      }

      doTheMath();
    }
    enteredNumber = "";

    currentOperator = target.innerHTML;

    console.log(currentOperator);

    // clicking = calls operate() on the entered values
    // const equalBtn = document.querySelector("#equalBtn");
    // equalBtn.addEventListener("click", operate(num1, num2, op));

    // clicking another operator also calls operate()
    // displays solution, and puts solution into num1 to be used in next calculation
  }
  console.log({ n1, n2, currentOperator, enteredNumber });
});

// add clear button that clears resultsDiv & all data
// reload the page? or is there better solution?
const clearBtn = document.querySelector("#clearBtn");
clearBtn.addEventListener("click", () => {
  document.location.reload();
});

// // BONUS: add . to let users input decimals. Only allow one . per number (Disable if . is on display)
// const periodBtn = document.querySelector("#periodBtn");
// if (#output.value already contains .) {
//     periodBtn.disabled = true;
//     periodBtn.classList.add("disabled")
// }

// // BONUS: add a backspace button to delete the last character entered in display
let screenView = document.querySelector("#output").value;

const backspaceBtn = document.querySelector("#backspaceBtn");
backspaceBtn.addEventListener("click", () => {
  screenView = screenView.value.slice(0, -1);
});
// // BONUS: add keyboard support
