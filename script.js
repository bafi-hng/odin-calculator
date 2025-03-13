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

// display
const displayNum = document.querySelector(".display");


// digit buttons
let currNum = "";

let firstNum = currNum;
let secondNum;
let operator;

const digitButtons = document.querySelectorAll(".digit");
digitButtons.forEach((button) => {
    button.addEventListener("click", () => {
        currNum += button.textContent;
        currNum = parseInt(currNum)
        displayNum.textContent = (currNum.toString());
    })
});

// operator buttons
const opButtons = document.querySelectorAll(".operator");
opButtons.forEach((button) => {
    button.addEventListener("click", () => {
        firstNum = currNum;
        currNum = "";
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
    });
});

// result button
const resButton = document.querySelector(".result");
resButton.addEventListener("click", () => {
    secondNum = currNum;
    result = operator(firstNum, secondNum);
    console.log(result);
    displayNum.textContent = result.toString();
    currNum = "";
})


// clear button
const clearButton = document.querySelector("#clear");
clearButton.addEventListener("click", () => {
    currNum = "";
    displayNum.textContent = "0";
})

console.log(displayNum.textContent)
