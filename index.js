const calculatorForm = document.getElementById("calculator");
function calculator(a, b) {
  const firstNumber = document.querySelector("#fnumber");
  const secondNumber = document.querySelector("#snumber");
  a = firstNumber.value;
  b = secondNumber.value;
  const select = document.getElementById("select");
  const x = select.selectedIndex;
  const y = select.options;

  if (firstNumber.value && secondNumber.value) {
    if (y[x].text === "multiplication") {
        alert(a * b);
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