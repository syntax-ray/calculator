let seven_btn = document.querySelector("#seven");
let eight_btn = document.querySelector("#eight");
let nine_btn = document.querySelector("#nine");
let divide_btn = document.querySelector("#divide");
let four_btn = document.querySelector("#four");
let five_btn = document.querySelector("#five");               
let six_btn = document.querySelector("#six");                  
let times_btn = document.querySelector("#times");                 
let one_btn = document.querySelector("#one");
let two_btn = document.querySelector("#two");
let three_btn = document.querySelector("#three");
let minus_btn = document.querySelector("#minus");
let zero_btn = document.querySelector("#zero");
let period_btn = document.querySelector("#period");
let plus_btn = document.querySelector("#plus");
let equals_btn = document.querySelector("#equals");
let clear_btn = document.querySelector("#clear");
let backspace_btn = document.querySelector('#backspace');
let display = document.querySelector('#display');
let OPERATORS = ['÷', '×', '-', '+']


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

function populateDisplay(value) {
    display.textContent += value
}

function clearDisplay() {
    display.textContent = "";
}

function countOperands(text) {
    let count = 0;
    if (text[0] === '-') {
        count = -1;
    }
    for (const char of text) {
        if (OPERATORS.includes(char)) {
            count += 1;
        }
    }
    return count;
}

function evaluateExpression() {
    if (display.textContent.length > 0) {
        let prev_value = display.textContent[display.textContent.length - 1];
        let exclusion_list = ['÷', '×', '-', '.', '+'];
        if (!exclusion_list.includes(prev_value)) {
            let currentValue = display.textContent
            while (true) {
                // handle division
                while (true) {
                    if (currentValue.includes('÷')) {
                        let start = undefined;
                        let end = undefined;
                        let position_of_division = currentValue.indexOf('÷');

                        // find the first value.
                        let i = position_of_division - 1;
                        let num_1 = '';
                        while (i >= 0) {
                            // 456
                            num_1 = currentValue[i] + num_1
                            start = i;
                            i -= 1
                            if (i < 0 || OPERATORS.includes(currentValue[i])) {
                                break;
                            }
                        }
                        num_1 = parseFloat(num_1);
                        
                        // find the second value
                        i = position_of_division + 1;
                        let num_2 = '';
                        while (i < currentValue.length) {
                            num_2 += currentValue[i];
                            i += 1
                            if (i >= currentValue.length || OPERATORS.includes(currentValue[i])) {
                                end = i;
                                break;
                            }
                        }
                        num_2 = parseFloat(num_2);
                        const result = operate(num_1, num_2, '/');
                        if (start > 0) {
                            currentValue = currentValue.slice(0, start) + `${result}` + currentValue.slice(end, currentValue.length);
                        } else if (start === 0) {
                            currentValue = `${result}` + currentValue.slice(end, currentValue.length);
                        }
                    } else {
                        break;
                    }
                }

                // handle multiplication
                while (true) {
                    if (currentValue.includes('×')) {
                        let start = undefined;
                        let end = undefined;
                        let position_of_multiplication = currentValue.indexOf('×');

                        // find the first value.
                        let i = position_of_multiplication - 1;
                        let num_1 = '';
                        while (i >= 0) {
                            // 456
                            num_1 = currentValue[i] + num_1
                            start = i;
                            i -= 1
                            if (i < 0 || OPERATORS.includes(currentValue[i])) {
                                break;
                            }
                        }
                        num_1 = parseFloat(num_1);
                        
                        // find the second value
                        i = position_of_multiplication + 1;
                        let num_2 = '';
                        while (i < currentValue.length) {
                            num_2 += currentValue[i];
                            i += 1
                            if (i >= currentValue.length || OPERATORS.includes(currentValue[i])) {
                                end = i;
                                break;
                            }
                        }
                        num_2 = parseFloat(num_2);
                        const result = operate(num_1, num_2, '*');
                        if (start > 0) {
                            currentValue = currentValue.slice(0, start) + `${result}` + currentValue.slice(end, currentValue.length);
                        } else if (start === 0) {
                            currentValue = `${result}` + currentValue.slice(end, currentValue.length);
                        }
                    } else {
                        break;
                    }
                }

                // handle addition
                while (true) {
                    if (currentValue.includes('+')) {
                        let start = undefined;
                        let end = undefined;
                        let position_of_addition = currentValue.indexOf('+');

                        // find the first value.
                        let i = position_of_addition - 1;
                        let num_1 = '';
                        while (i >= 0) {
                            // 456
                            num_1 = currentValue[i] + num_1
                            start = i;
                            i -= 1
                            if (i < 0 || OPERATORS.includes(currentValue[i])) {
                                if (i >= 0 && currentValue[i] === '-') {
                                    num_1 = "-" + num_1;
                                    start -= 1;
                                }
                                break;
                            }
                        }
                        num_1 = parseFloat(num_1);
                        
                        // find the second value
                        i = position_of_addition + 1;
                        let num_2 = '';
                        while (i < currentValue.length) {
                            num_2 += currentValue[i];
                            i += 1
                            if (i >= currentValue.length || OPERATORS.includes(currentValue[i])) {
                                end = i;
                                break;
                            }
                        }
                        num_2 = parseFloat(num_2);
                        const result = operate(num_1, num_2, '+');
                        if (start > 0) {
                            currentValue = currentValue.slice(0, start) + `${result}` + currentValue.slice(end, currentValue.length);
                        } else if (start === 0) {
                            currentValue = `${result}` + currentValue.slice(end, currentValue.length);
                        }
                    } else {
                        break;
                    }
                }

                // handle subtraction
                while (true) {
                    if (currentValue.includes('-') && countOperands(currentValue) > 0) {
                        let start = undefined;
                        let end = undefined;
                        let position_of_subraction = currentValue.indexOf('-');
                        let subtraction_operations = 0;
                        for (let x = 0; x < currentValue.length; x++) {
                            if (currentValue[x] === '-') {
                                subtraction_operations += 1;
                            }
                        }
                        if (subtraction_operations > 1) {
                            for(let y = 1; y < currentValue.length; y++) {
                                if (currentValue[y] === '-') {
                                    position_of_subraction = y;
                                    break;
                                }
                            }
                        }

                        // find the first value.
                        let i = position_of_subraction - 1;
                        let num_1 = '';
                        while (i >= 0) {
                            // 456
                            num_1 = currentValue[i] + num_1
                            start = i;
                            i -= 1
                            if (i < 0 || OPERATORS.includes(currentValue[i])) {
                                if (i >= 0 && currentValue[i] === '-') {
                                    num_1 = "-" + num_1;
                                    start -= 1;
                                }
                                break;
                            }
                        }
                        num_1 = parseFloat(num_1);
                        
                        // find the second value
                        i = position_of_subraction + 1;
                        let num_2 = '';
                        while (i < currentValue.length) {
                            num_2 += currentValue[i];
                            i += 1
                            if (i >= currentValue.length || OPERATORS.includes(currentValue[i])) {
                                end = i;
                                break;
                            }
                        }
                        num_2 = parseFloat(num_2);
                        const result = operate(num_1, num_2, '-');
                        if (start > 0) {
                            currentValue = currentValue.slice(0, start) + `${result}` + currentValue.slice(end, currentValue.length);
                        } else if (start === 0) {
                            currentValue = `${result}` + currentValue.slice(end, currentValue.length);
                        }
                    } else {
                        break;
                    }
                }
                if (countOperands(currentValue) <= 0) {
                    break;
                }
            }
            display.textContent = currentValue;
        }
    }
}

function numberClicked(num) {
    populateDisplay(num);
}

function divideClicked() {
    if (display.textContent.length > 0) {
        let prev_value = display.textContent[display.textContent.length - 1];
        let exclusion_list = ['÷', '×', '-', '.', '+'];
        if (!exclusion_list.includes(prev_value)) {
            populateDisplay('÷');
        }
    }
}

function timesClicked() {
    if (display.textContent.length > 0) {
        let prev_value = display.textContent[display.textContent.length - 1];
        let exclusion_list = ['÷', '×', '-', '.', '+'];
        if (!exclusion_list.includes(prev_value)) {
            populateDisplay('×');
        }
    }
}

function minusClicked() {
    let prev_value = display.textContent[display.textContent.length - 1];
    let exclusion_list = ['÷', '×', '-', '.', '+'];
    if (!exclusion_list.includes(prev_value)) {
        populateDisplay('-');
    }
}

function periodClicked() {
    if (display.textContent.length > 0) {
        let prev_value = display.textContent[display.textContent.length - 1];
        let exclusion_list = ['÷', '×', '-', '.', '+'];
        if (!exclusion_list.includes(prev_value)) {
            let period_stack = [];
            let display_content = display.textContent;
            for (const character of display_content) {
                if (character === '.') {
                    period_stack.push('.');
                } else if (['÷', '×', '-', '+'].includes(character) && period_stack.length  > 0) {
                    period_stack.pop()
                }
            }
            if (period_stack.length === 0) {
                populateDisplay('.');
            }
        }
    }
}

function plusClicked() {
    if (display.textContent.length > 0) {
        let prev_value = display.textContent[display.textContent.length - 1];
        let exclusion_list = ['÷', '×', '-', '.', '+'];
        if (!exclusion_list.includes(prev_value)) {
            populateDisplay('+');
        }
    }
}

function backspaceClicked() {
    display.textContent = display.textContent.slice(0, display.textContent.length - 1);
}

backspace_btn.addEventListener('click', () => backspaceClicked());
seven_btn.addEventListener('click', () => numberClicked(7));
eight_btn.addEventListener('click', () => numberClicked(8));
nine_btn.addEventListener('click', () => numberClicked(9));
divide_btn.addEventListener('click', () => divideClicked());
four_btn.addEventListener('click', () => numberClicked(4));
five_btn.addEventListener('click', () => numberClicked(5));
six_btn.addEventListener('click', () => numberClicked(6));
times_btn.addEventListener('click', () => timesClicked());
one_btn.addEventListener('click', () => numberClicked(1));
two_btn.addEventListener('click', () => numberClicked(2));
three_btn.addEventListener('click', () => numberClicked(3));  
minus_btn.addEventListener('click', () => minusClicked());  
zero_btn.addEventListener('click', () => numberClicked(0));  
period.addEventListener('click', () => periodClicked()); 
plus_btn.addEventListener('click', () => plusClicked());  
equals_btn.addEventListener('click', () => evaluateExpression()); 
clear_btn.addEventListener('click', () =>  clearDisplay());

document.addEventListener('keydown', (event)=> {
    switch (event.key) {
        case 'Enter':
            evaluateExpression();
            break;
        case 'Delete':
            clearDisplay();
            break;
        case '7':
            numberClicked(7);
            break;
        case '8':
            numberClicked(8);
            break;
        case '9':
            numberClicked(9);
            break;
        case '/':
            divideClicked();
            break;
        case '4':
            numberClicked(4);
            break;
        case '5':
            numberClicked(5);
            break;
        case '6':
            numberClicked(6);
            break;
        case '*':
            timesClicked();
            break;
        case '1':
            numberClicked(1);
            break;
        case '2':
            numberClicked(2);
            break;
        case '3':
            numberClicked(3);
            break;
        case '-':
            minusClicked();
            break;
        case '0':
            numberClicked(0);
            break;
        case '.':
            periodClicked();
            break;
        case '+':
            plusClicked();
            break;
        case 'Backspace':
            backspaceClicked();
            break;
    }
})