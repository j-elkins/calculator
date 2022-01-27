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

// add a backspace button to delete the last character entered in display
function backspace() {
  let value = document.querySelector("#output").value;
  // document.querySelector("#output").value = value.substr(0, value.length - 1);
  document.querySelector("#output").value = value.slice(0, -1);
}

const backspaceBtn = document.querySelector("#backspaceBtn");
backspaceBtn.addEventListener("click", () => {
  backspace();
});

// deletes last character from screen....but not from num1/num2 storage & calculation

// resultsDiv displays numbers and operator as they are entered
// clicking = or any operator calls operate(), pushes result to n1
function calculateUsingClickInput(target) {
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
    // console.log({ n1, n2, currentOperator, enteredNumber });
  }
}

// let keyPressedIsNumber
// let keyPressedIsOperator

function calculateUsingKeyInput(keyPressed) {
  // console.log(keyPressed);

  if (
    keyPressed === "1" ||
    keyPressed == "2" ||
    keyPressed == "3" ||
    keyPressed == "4" ||
    keyPressed == "5" ||
    keyPressed == "6" ||
    keyPressed == "7" ||
    keyPressed == "8" ||
    keyPressed == "9" ||
    keyPressed == "0" ||
    keyPressed == "."
  ) {
    let value = keyPressed;
    enteredNumber += value;
    document.querySelector("#output").value = enteredNumber;
    console.log(enteredNumber);
  } else if (keyPressed === "Backspace") {
    console.log("pressed");
    backspace();
  } else if (
    keyPressed === "+" ||
    keyPressed == "-" ||
    keyPressed == "*" ||
    keyPressed == "/" ||
    keyPressed == "="
  ) {
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

    currentOperator = keyPressed;
    if (currentOperator === "=") {
      currentOperator = null;
    }

    console.log(currentOperator);
    // console.log({ n1, n2, currentOperator, enteredNumber });
  }
}

// event listener for any button to be clicked
document.querySelector("#btnContainer").addEventListener("click", (event) => {
  let target = event.target;
  calculateUsingClickInput(target);
});

// event listener for key to be pressed
document.addEventListener("keydown", (event) => {
  let key = event.key;
  // console.log(event.key);

  // if it's one of the num/op keys, do calculateUsingKeyInput(). any other key - ignore
  const isValid = /^[0-9\.\,\+\-\*\=]$/i.test(key);

  if (isValid == true) {
    calculateUsingKeyInput(key);
  } else if (key === "Backspace") {
    calculateUsingKeyInput(key);
  }
});

// add clear button that clears resultsDiv & all data
const clearBtn = document.querySelector("#clearBtn");
clearBtn.addEventListener("click", () => {
  document.location.reload();
});
