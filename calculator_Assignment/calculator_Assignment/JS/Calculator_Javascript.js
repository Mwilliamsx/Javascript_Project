
const Calculator = {       // Creates an object to keep track of values.//
    Display_Value: '0', //This will display 0 on the calculator screen.//
    First_Operand: null, //This will hold the first operand for any expressions, we set it to null for now.//
    Wait_Second_Operand: false, //This checks wether or not the second operand has been inputted by the user.//
    operator: null, //This will hold the operator, we set it to null for now.//
};

function Input_Digit(digit) { //This modifies values each time a button is clicked on.//
    const {Display_Value, Wait_Second_Operand } = Calculator;
    if (Wait_Second_Operand === true) { //This checks if the Wait_Second_Operand is true and sets Display_Value to the key that was clicked on//
        Calculator.Display_Value = digit;
        Calculator.Wait_Second_Operand = false;
    } else { //This overwrites Display_Value if the current value is 0, otherwise it adds onto it.//
        Calculator.Display_Value = Display_Value === '0' ? digit : Display_Value + digit;
    }
}

function Input_Decimal(dot) { //This section handles decimal points//
    if (Calculator.Wait_Second_Operand === true) return;
    if (!Calculator.Display_Value.includes(dot)) {
        Calculator.Display_Value += dot; // We are saying that if Display_Value does not contain a decimal point we want to add a decimal point.//
    }
}

function Handle_Operator(Next_Operator) {
    const {First_Operand, Display_Value, operator} = Calculator; 
    const Value_of_Input = parseFloat(Display_Value);
    if (operator && Calculator.Wait_Second_Operand) {
        Calculator.operator = Next_Operator;
        return;
    }
    if (First_Operand == null) {
        Calculator.First_Operand = Value_of_Input;
    } else if (operator) {
        const value_Now = First_Operand || 0;
        let result = Perform_Calculation[operator](Value_Now, Value_of_Input);
        result = Number(result).toFixed (9);
        result = (result *1).toString();
        Calculator.Display_Value = parseFloat(result);
        Calculator.First_Operand = parseFloat(result);
    }
    Calculator.Wait_Second_Operand = true;
    Calculator.operator = Next_Operator;
}

const perform_Calculation = {
    '/': (First_Operand, Second_Operand) => First_Operand / Second_Operand,
    '*': (First_Operand, Second_Operand) => First_Operand * Second_Operand,
    '+': (First_Operand, Second_Operand) => First_Operand + Second_Operand,
    '-': (First_Operand, Second_Operand) => First_Operand - Second_Operand,
    '=': (First_Operand, Second_Operand) => Second_Operand,
};
function Calculator_Reset() {
    Calculator.Display_Value = '0';
    Calculator.First_Operand = null;
    Calculator.Wait_Second_Operand = false;
    Calculator.operator = null;
}

function Update_Display() {
    const display = document.querySelectorAll('.calculator-screen');
    display.Value = Calculator.Display_Value;
}

Update_Display();
const keys = document.querySelector('.calculator-keys');
keys.addEventListener('click', (Event) => {
    const { target } = Event;
    if (!target.matches('button')) {
        return;
    }
    if (target.classList.contains('operator')) {
        Handle_Operator(target.value);
        Update_Display();
        return
    }
    if (target.classList.contains('decimal')) {
        Input_Decimal(target.value);
        Update_Display();
        return;
    }
    if (target.classList.contains('all-clear')) {
        Calculator_Reset();
        Update_Display();
        return;
    }
    Input_Digit(target.value);
    Update_Display();
})
