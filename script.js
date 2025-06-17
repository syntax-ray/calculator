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
let display = document.querySelector('#display');


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

seven_btn.addEventListener('click', () => {
    populateDisplay(7);
});
eight_btn.addEventListener('click', () => {
    populateDisplay(8);
});
nine_btn.addEventListener('click', () => {
    populateDisplay(9);
});
divide_btn.addEventListener('click', () => {
    if (display.textContent.length > 0) {
        let prev_value = display.textContent[display.textContent.length - 1];
        let exclusion_list = ['÷', '×', '-', '.', '+'];
        if (!exclusion_list.includes(prev_value)) {
            populateDisplay('÷');
        }
    }
});
four_btn.addEventListener('click', () => {
    populateDisplay(4);
});
five_btn.addEventListener('click', () => {
    populateDisplay(5);
});
six_btn.addEventListener('click', () => {
    populateDisplay(6);
});
times_btn.addEventListener('click', () => {
    if (display.textContent.length > 0) {
        let prev_value = display.textContent[display.textContent.length - 1];
        let exclusion_list = ['÷', '×', '-', '.', '+'];
        if (!exclusion_list.includes(prev_value)) {
            populateDisplay('×');
        }
    }
});
one_btn.addEventListener('click', () => {
    populateDisplay(1);
});
two_btn.addEventListener('click', () => {
    populateDisplay(2);
});
three_btn.addEventListener('click', () => {
    populateDisplay(3);
});  
minus_btn.addEventListener('click', () => {
    let prev_value = display.textContent[display.textContent.length - 1];
    let exclusion_list = ['÷', '×', '-', '.', '+'];
    if (!exclusion_list.includes(prev_value)) {
        populateDisplay('-');
    }
});  
zero_btn.addEventListener('click', () => {
    populateDisplay(0);
});  
period.addEventListener('click', () => {
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
}); 
plus_btn.addEventListener('click', () => {
    if (display.textContent.length > 0) {
        let prev_value = display.textContent[display.textContent.length - 1];
        let exclusion_list = ['÷', '×', '-', '.', '+'];
        if (!exclusion_list.includes(prev_value)) {
            populateDisplay('+');
        }
    }
});  
equals_btn.addEventListener('click', () => {
    if (display.textContent.length > 0) {
        let prev_value = display.textContent[display.textContent.length - 1];
        let exclusion_list = ['÷', '×', '-', '.', '+'];
        if (!exclusion_list.includes(prev_value)) {
            alert("todo");
        }
    }
}); 
clear_btn.addEventListener('click', () => {
    clearDisplay();
})