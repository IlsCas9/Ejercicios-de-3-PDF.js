let displayValue = '';
let operator = '';
let storedValue = '';
let isOperatorPressed = false;

// Actualiza la pantalla
function updateDisplay(value) {
  const display = document.getElementById('display');
  display.innerText = value;
}

// Añade número a la pantalla
function appendNumber(number) {
  if (isOperatorPressed) {
    displayValue = '';
    isOperatorPressed = false;
  }
  displayValue += number;
  updateDisplay(displayValue);
}

// Añade operador a la pantalla
function appendOperator(op) {
  if (displayValue !== '') {
    storedValue = displayValue;
    operator = op;
    isOperatorPressed = true;
  }
}

// Realiza la operación
function calculate() {
  let result = 0;
  const current = parseFloat(displayValue);
  const previous = parseFloat(storedValue);
  
  switch (operator) {
    case '+':
      result = previous + current;
      break;
    case '-':
      result = previous - current;
      break;
    case '*':
      result = previous * current;
      break;
    case '/':
      result = previous / current;
      break;
    default:
      return;
  }

  updateDisplay(result);
  displayValue = result.toString();
  storedValue = '';
  operator = '';
}

// Resetea la calculadora
function clearDisplay() {
  displayValue = '';
  storedValue = '';
  operator = '';
  updateDisplay('0');
}