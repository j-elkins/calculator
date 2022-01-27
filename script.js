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
// starts as true; clicking periodBtn changes to false; clicking operator restores to true
const periodBtn = document.querySelector("#periodBtn");

let decimalAllowed = true;

periodBtn.addEventListener("click", () => {
  decimalAllowed = false;
  changePeriodButtonStatus();
});

function changePeriodButtonStatus() {
  if (decimalAllowed === true) {
    periodBtn.classList.remove("disabled");
  } else if (decimalAllowed === false) {
    periodBtn.classList.add("disabled");
  }
}

// or - if num1 contains . already, don't allow another?
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

  result = Math.round(result * 100000) / 100000;
  return result;
}

// let result = num1 `${op}` num2; -- POSSIBLE TO SHORTEN THIS EVEN MORE?

// set variables for entered numbers & operator
let enteredNumber = "";
let currentOperator = null;

let n1 = 0;
let n2 = 0;

// function calls operate() and displays solution
function doTheMath() {
  const solution = operate(n1, n2, currentOperator);
  document.querySelector("#output").value = solution;
  console.log({ solution });
  n1 = solution;
}

// resultsDiv displays numbers and operator as they are entered
// clicking = or any operator calls operate(), pushes result to n1
function calculate(target) {
  if (target.matches(".btn.num")) {
    let value = target.innerHTML;
    enteredNumber += value;
    document.querySelector("#output").value = enteredNumber;
    console.log(enteredNumber);
  } else if (target.matches(".btn.op")) {
    if (enteredNumber !== "") {
      let n = parseFloat(enteredNumber);
      if (currentOperator == null) {
        n1 = n;

        // reset decimal button
        decimalAllowed = true;
        changePeriodButtonStatus();
      } else {
        n2 = n;

        doTheMath();

        // reset decimal button
        decimalAllowed = true;
        changePeriodButtonStatus();
      }
    }

    enteredNumber = "";

    currentOperator = target.innerHTML;
    if (currentOperator === "=") {
      currentOperator = null;
    }

    console.log(currentOperator);
  }
}
console.log({ n1, n2, currentOperator, enteredNumber });

// function to display stream of characters as they're entered
function displayNumbersAsEntered(target) {
  let displayValue = target.innerHTML;
  document.querySelector("#entered").value = displayValue;

  // this only displays most recent character clicked... how to show all?
}

// event listener for any button to be clicked
document.querySelector("#btnContainer").addEventListener("click", (event) => {
  let target = event.target;
  calculate(target);
  displayNumbersAsEntered(target);

  console.log(event);
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
