
const Calculator = {       // Creates an object to keep track of values.//
    display_Value: '0', //This will display 0 on the calculator screen.//
    first_Operand: null, //This will hold the first operand for any expressions, we set it to null for now.//
    wait_Second_Operand: false, //This checks wether or not the second operand has been inputted by the user.//
    operator: null, //This will hold the operator, we set it to null for now.//
};

function input_Digit(digit) { //This modifies values each time a button is clicked on.//
    const {display_Value, wait_Second_Operand } = Calculator;
    if (wait_Second_Operand === true) { //This checks if the Wait_Second_Operand is true and sets Display_Value to the key that was clicked on//
        Calculator.display_Value = digit;
        Calculator.wait_Second_Operand = false;
    } else { //This overwrites Display_Value if the current value is 0, otherwise it adds onto it.//
        Calculator.display_Value = display_Value === '0' ? digit : display_Value + digit;
    }
}

function input_Decimal(dot) { //This section handles decimal points//
    if (Calculator.wait_Second_Operand === true) return;
    if (!Calculator.display_Value.includes(dot)) {
        Calculator.display_Value += dot; // We are saying that if Display_Value does not contain a decimal point we want to add a decimal point.//
    }
}

function handle_Operator(Next_Operator) {
    const {first_Operand, display_Value, operator} = Calculator; 
    const value_of_Input = parseFloat(display_Value);
    if (operator && Calculator.wait_Second_Operand) {
        Calculator.operator = Next_Operator;
        return;
    }
    if (first_Operand == null) {
        Calculator.first_Operand = value_of_Input;
    } else if (operator) {
        const value_Now = first_Operand || 0;
        let result = perform_Calculation[operator](value_Now, value_of_Input);
        result = Number(result).toFixed (9);
        result = (result *1).toString();
        Calculator.display_Value = parseFloat(result);
        Calculator.first_Operand = parseFloat(result);
    }
    Calculator.wait_Second_Operand = true;
    Calculator.operator = Next_Operator;
}

const perform_Calculation = {
    '/': (first_Operand, second_Operand) => first_Operand / second_Operand,
    '*': (first_Operand, second_Operand) => first_Operand * second_Operand,
    '+': (first_Operand, second_Operand) => first_Operand + second_Operand,
    '-': (first_Operand, second_Operand) => first_Operand - second_Operand,
    '=': (first_Operand, second_Operand) => second_Operand,
};
function calculator_Reset() {
    Calculator.display_Value = '0';
    Calculator.first_Operand = null;
    Calculator.wait_Second_Operand = false;
    Calculator.operator = null;
}

function update_Display() {
    const display = document.querySelector('.calculator-screen');
    display.Value = Calculator.display_Value;
}

update_Display();
const keys = document.querySelector('.calculator-keys');
keys.addEventListener('click', (Event) => {
    const { target } = Event;
    if (!target.matches('button')) {
        return;
    }
    if (target.classList.contains('operator')) {
        handle_Operator(target.value);
        update_Display();
        return;
    }
    if (target.classList.contains('decimal')) {
        input_Decimal(target.value);
        update_Display();
        return;
    }
    if (target.classList.contains('all-clear')) {
        calculator_Reset();
        update_Display();
        return;
    }
    input_Digit(target.value);
    update_Display();
});