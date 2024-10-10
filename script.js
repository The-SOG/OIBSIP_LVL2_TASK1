let displayValue = '';
let currentOperator = '';
let firstOperand = '';
let secondOperand = '';

const calcDisplay = document.getElementById('calc-display');

// Append numbers to the display
function appendNumber(number) {
    displayValue += number;
    calcDisplay.value = displayValue;
}

// Append operator to the display
function appendOperator(operator) {
    if (displayValue === '') return; // Ignore if display is empty
    firstOperand = displayValue;
    currentOperator = operator;
    displayValue = ''; // Clear display for the next operand
}

// Clear the display
function clearDisplay() {
    displayValue = '';
    firstOperand = '';
    secondOperand = '';
    currentOperator = '';
    calcDisplay.value = '';
}

// Delete the last digit entered
function deleteDigit() {
    displayValue = displayValue.slice(0, -1);
    calcDisplay.value = displayValue;
}

// Perform the calculation and display the result
function calculateResult() {
    if (currentOperator === '' || displayValue === '') return; // Ignore if no operation is selected

    secondOperand = displayValue;
    const firstNum = parseFloat(firstOperand);
    const secondNum = parseFloat(secondOperand);

    let result = 0;
    switch (currentOperator) {
        case '+':
            result = firstNum + secondNum;
            break;
        case '-':
            result = firstNum - secondNum;
            break;
        case '*':
            result = firstNum * secondNum;
            break;
        case '/':
            result = secondNum !== 0 ? firstNum / secondNum : 'Error'; // Avoid division by 0
            break;
        default:
            return;
    }

    displayValue = result.toString();
    calcDisplay.value = displayValue;
    currentOperator = ''; // Reset the operator
}
