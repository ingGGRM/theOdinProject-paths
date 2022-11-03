const screen = document.getElementById("screen");
const numButtons = document.getElementById("num-buttons");
const funcButtons = document.getElementById("func-buttons");

// const arrays for each button label
const numbers = ['7', '8', '9', '4', '5', '6', '1', '2', '3', '.', '0'] //'·'
const functions = ['AC', '/', 'x', '-', '+', '=']

// variables
let num1, num2, operator, result, concat, dot;

/* init function called on page load */
function init() {
    dot = false;
    concat = true;
    operator = '';
    genCalculator();
}

/* function that generate all calculator buttons */
function genCalculator() {
    for(let i = 0; i < numbers.length; i++) { // 11 button element creation for 0-9, dot(.) and equal(=)
        const numButton = document.createElement('button');
        numButton.textContent = numbers[i];
        numButton.classList.add('button');
        if(numbers[i] == '0') numButton.classList.add('zero');
        if(numbers[i] == '0' || numbers[i] == '.') numButton.classList.add('zero-dot');
        numButtons.appendChild(numButton);
        numButton.addEventListener('click', buttonClick);
    }

    for(let i = 0; i < functions.length; i++) { // 4 button element creation for math functions (+, -, *, /)
        const funcButton = document.createElement('button');
        funcButton.textContent = functions[i];
        funcButton.classList.add('button');
        funcButtons.appendChild(funcButton);
        funcButton.addEventListener('click', buttonClick);
    }
}

/* button clicks listener functions */
function buttonClick() {
    if(numbers.includes(this.textContent) && screen.textContent.length < 10) {
        if(dot && this.textContent == '.') return;
        else if(!dot && this.textContent == '.') dot = true;

        if(screen.textContent != 0 && concat) {
            screen.textContent += this.textContent;
        } else {
            screen.textContent = this.textContent;
            concat = true;
        }
    } else if(!numbers.includes(this.textContent)) {
        if(this.textContent == 'AC') ac();
        else if(screen.textContent != '0' && screen.textContent != '.') {
            if(functions.slice(1,5).includes(this.textContent)) {
                if(operator == '') {
                    num1 = parseFloat(screen.textContent);
                    operator = this.textContent;
                    concat = false;
                    dot = false;
                } else {
                    num2 = parseFloat(screen.textContent);
                    result = calc(num1, num2, operator);
                    screen.textContent = (result.toString().length > 9) ? result.toString().slice(0,10) : result.toString();

                    num1 = result;
                    operator = this.textContent;
                    concat = false;
                    dot = false;
                }
                return;
            } else if(this.textContent == '=') {
                num2 = parseFloat(screen.textContent);
                result = calc(num1, num2, operator);
                screen.textContent = (result.toString().length > 9) ? result.toString().slice(0,10) : result.toString();
                concat = false;
                num1, num2, result = 0;
                operator = '';
                dot = false;
                return;
            }
        }
    }
}

/* calculator function */
function calc(x, y, func) {
    if(func == '+') return x + y; // returns x + y
    else if(func == '-') return x - y; // returns x - y
    else if(func == 'x') return x * y; // returns x * y
    else if(func == '/') return x / y; // returns x / y
    else return 0;
}

/* clear calculator function */
function ac() {
    screen.textContent = 0;
    num1, num2, result = 0;
    operator = '';
    concat = false;
    dot = false;
}