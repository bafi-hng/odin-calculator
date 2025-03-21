function add(num1, num2) {
    return num1 + num2;
}

function subtract(num1, num2) {
    return num1 - num2
}

function multiply(num1, num2) {
    return num1 * num2;
}

function divide(num1, num2) {
    return num1 / num2;
}

function operate(num1, num2, operator) {
    return operator(num1, num2);
}

function test() {
    // console.log(
    //     `inputNum: ${inputNum}`,
    //     `firstNum: ${firstNum}`,
    //     `secondNum: ${secondNum}`
    // )
    console.log(calculationDone)
}

// display
const displayNum = document.querySelector(".display");


// digit buttons
let inputNum = 0;

let firstNum = 0;
let secondNum = 0;
let operator = null;

let result = 0;

let calculationDone = false;

const digitButtons = document.querySelectorAll(".digit");
digitButtons.forEach((button) => {
    button.addEventListener("click", () => {

        if (calculationDone == true) {
            inputNum = 0;
            calculationDone = false;
        }

        inputNum = inputNum.toString();

        if (inputNum.length < 9) {
            inputNum += button.textContent;
            inputNum = parseInt(inputNum)
            displayNum.textContent = (inputNum.toString());
        }

        test()
    })
});

// operator buttons
const opButtons = document.querySelectorAll(".operator");
opButtons.forEach((button) => {
    button.addEventListener("click", () => {

        if (operator === null) {
            firstNum = inputNum;
            inputNum = 0;
        }
        
        switch (button.textContent) {
            case "+": 
                operator = add;
                break;
            case "-": 
                operator = subtract;
                break;
            case "×":
                operator = multiply;
                break;
            case "÷":
                operator = divide;
                break;
        }

        calculationDone = false;

        test();
    });
});

// result button
const resButton = document.querySelector(".result");
resButton.addEventListener("click", () => {
    secondNum = inputNum;
    
    if (calculationDone == true) {
        return;
    }

    result = operator(firstNum, secondNum);

    if (!isFinite(result)) {
        displayNum.textContent = "Error";
    } else {
        if (Number.isInteger(result)) {
            displayNum.textContent = result.toString();
        } else {
            displayNum.textContent = result.toFixed(9 - (1 + result.toString().indexOf('.'))).toString();
        }
    }

    inputNum = result;
    firstNum = 0;
    secondNum = 0;
    operator = null;

    calculationDone = true;

    test();
    console.log(result);
})


// clear button
const clearButton = document.querySelector("#clear");
clearButton.addEventListener("click", () => {
    inputNum = 0;
    firstNum = 0;
    secondNum = 0;
    operator = null;
    displayNum.textContent = "0";

    calculationDone = false;
    test();
})

console.log(displayNum.textContent)
