let output = document.getElementById('output');
let currentInput = '';

function clearOutput() {
    currentInput = '';
    updateOutput();
}

function appendNumber(number) {
    currentInput += number;
    updateOutput();
}

function appendOperator(operator) {
    if (currentInput !== '' && !currentInput.endsWith(operator)) {
        currentInput += operator;
        updateOutput();
    }
}

function calculateResult() {
    try {
        currentInput = eval(currentInput);
        updateOutput();
    } catch (error) {
        currentInput = 'Error';
        updateOutput();
    }
}

function updateOutput() {
    output.innerText = currentInput;
}