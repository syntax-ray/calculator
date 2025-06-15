function add(a, b) {
    return a + b;
}

function subtract(a, b) {
    return a - b;
}

function multiply(a, b) {
    return a * b
}

function divide(a, b) {
    return a / b;
}

function operate(num_1, num_2, oper) {
    switch (oper) {
        case "+":
            return add(num_1, num_2);
        case "-":
            return subtract(num_1, num_2);
        case "*":
            return multiply(num_1, num_2);
        case "/":
            return divide(num_1, num_2);   
    }
}