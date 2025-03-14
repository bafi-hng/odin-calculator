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
    console.log(
        `inputNum: ${inputNum}`,
        `firstNum: ${firstNum}`,
        `secondNum: ${secondNum}`
    )
}

// display
const displayNum = document.querySelector(".display");


// digit buttons
let inputNum = 0;

let firstNum = 0;
let secondNum = 0;
let operator = add;

let result = 0;

const digitButtons = document.querySelectorAll(".digit");
digitButtons.forEach((button) => {
    button.addEventListener("click", () => {
        if (inputNum != 0) {
            inputNum = 0;
        }
        inputNum = inputNum.toString();
        inputNum += button.textContent;
        inputNum = parseInt(inputNum)
        displayNum.textContent = (inputNum.toString());

        test()
    })
});

// operator buttons
const opButtons = document.querySelectorAll(".operator");
opButtons.forEach((button) => {
    button.addEventListener("click", () => {
        firstNum = inputNum;
        inputNum = 0;
        switch (button.textContent) {
            case "+": 
                operator = add;
                break;
            case "-": 
                operator = subtract;
                break;
            case "*":
                operator = multiply;
                break;
            case "/":
                operator = divide;
                break;
        }

        test();
    });
});

// result button
const resButton = document.querySelector(".result");
resButton.addEventListener("click", () => {
    secondNum = inputNum;
    result = operator(firstNum, secondNum);

    displayNum.textContent = result.toString();
    inputNum = result;
    firstNum = 0;
    secondNum = 0;

    test();
    console.log(result);
})


// clear button
const clearButton = document.querySelector("#clear");
clearButton.addEventListener("click", () => {
    inputNum = 0;
    firstNum = 0;
    secondNum = 0;
    operator = add;
    displayNum.textContent = "0";
    test();
})

console.log(displayNum.textContent)
