let display = document.getElementById('display');
let expression = '';

function appendCharacter(char) {
    expression += char;
    display.value = expression;
}

function clearDisplay() {
    expression = '';
    display.value = '';
}

function calculateResult() {
    try {
        let result = eval(expression);
        display.value = result;
        expression = result.toString();
    } catch (error) {
        display.value = 'Error';
        expression = '';
    }
}
