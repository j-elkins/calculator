// create basic functions for adding, subtracting, multiplying, dividing
// round answers with long decimals

// function add(num1, num2) {
//   let result = num1 + num2;
//   result = Math.round(result * 100000) / 100000;
//   return result;
// }

// function subtract(num1, num2) {
//   let result = num1 - num2;
//   result = Math.round(result * 100000) / 100000;
//   return result;
// }

// function multiply(num1, num2) {
//   let result = num1 * num2;
//   result = Math.round(result * 100000) / 100000;
//   return result;
// }

// function divide(num1, num2) {
//   let result = num1 / num2;
//   result = Math.round(result * 100000) / 100000;
//   return result;
// }

// create function operate() that takes two numbers and an operator
// operate() calls one of the basic functions and applies to the numbers entered

// function operate(num1, num2, op) {
//   if (op == "+") {
//     return add(num1, num2);
//   } else if (op == "-") {
//     return subtract(num1, num2);
//   } else if (op == "*") {
//     return multiply(num1, num2);
//   } else if (op == "/") {
//     return divide(num1, num2);
//   }
// }

// add decimal point functionality
let decimalAllowed = true;

if (decimalAllowed === true) {
  // decimal point button is functional. once pressed:
  decimalAllowed = false;
}

// BONUS: add . to let users input decimals. Only allow one . per number (Disable if . is on display)
const periodBtn = document.querySelector("#periodBtn");
periodBtn.addEventListener("click", () => {
  decimalAllowed = false;
});
// if (#output.value already contains .) {
//     periodBtn.disabled = true;
//     periodBtn.classList.add("disabled")
// }

// create function operate() that takes two numbers and applies an operator
function operate(num1, num2, op) {
  let result;

  if (op == "+") {
    result = num1 + num2;
  } else if (op == "-") {
    result = num1 - num2;
  } else if (op == "*") {
    result = num1 * num2;
  } else if (op == "/") {
    result = num1 / num2;
  }

  return result.toFixed(4);
}

// let result = num1 `${op}` num2; -- POSSIBLE TO SHORTEN EVEN MORE?

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
// clicking = or any operator calls operate(), pushes result to n1
document.querySelector("#btnContainer").addEventListener("click", (event) => {
  let target = event.target;

  if (target.matches(".btn.num")) {
    let value = target.innerHTML;
    enteredNumber += value;
    document.querySelector("#output").value = enteredNumber;
    console.log(enteredNumber);
  } else if (target.matches(".btn.op")) {
    if (enteredNumber !== "") {
      let n = parseInt(enteredNumber);
      if (currentOperator == null) {
        n1 = n;
        // reset decimalAllowed to true
      } else {
        n2 = n;

        doTheMath();

        // reset decimalAllowed to true
      }
    }

    enteredNumber = "";

    currentOperator = target.innerHTML;
    if (currentOperator === "=") {
      currentOperator = null;
    }

    console.log(currentOperator);
  }
  console.log({ n1, n2, currentOperator, enteredNumber });
});

// add clear button that clears resultsDiv & all data
const clearBtn = document.querySelector("#clearBtn");
clearBtn.addEventListener("click", () => {
  document.location.reload();
});

// BONUS: add a backspace button to delete the last character entered in display
// let screenView = document.querySelector("#output").value;

// const backspaceBtn = document.querySelector("#backspaceBtn");
// backspaceBtn.addEventListener("click", () => {
//   screenView = screenView.value.slice(0, -1);
// });

// BONUS: add keyboard support
