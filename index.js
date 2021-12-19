let calculatorForm = document.getElementById("calculator");
function calculator(a, b) {
  let firstNumber = document.querySelector("#fnumber");
  let secondNumber = document.querySelector("#snumber");
  a = firstNumber.value;
  b = secondNumber.value;
  let select = document.getElementById("select");
  let x = select.selectedIndex;
    let y = select.options;
    let answer;

  if (firstNumber.value && secondNumber.value) {
    if (y[x].text === "multiplication") {
        answer = parseInt(a * b);
        alert(answer);
    } else if (y[x].text === "division") {
      alert(a / b);
    } else if (y[x].text === "subtraction") {
      alert(a - b);
    } else if (y[x].text === "addition") {
      alert(+a + +b);
    }
  } else {
    return null;
  }
}

calculatorForm.onsubmit = function () {
  calculator();
};