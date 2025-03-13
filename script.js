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


let num1;
let num2;
let operator;


function operate(num1, num2, operator) {
    return operator(num1, num2);
}


const displayNum = document.querySelector(".display");

let inputNum = "";

const digitButtons = document.querySelectorAll(".digit");
digitButtons.forEach((button) => {
    button.addEventListener("click", () => {
        inputNum += button.textContent;
        inputNum = parseInt(inputNum)
        displayNum.textContent = (inputNum.toString());
    })
})

const clearButton = document.querySelector("#clear");
clearButton.addEventListener("click", () => {
    inputNum = "";
    displayNum.textContent = "0";
})

console.log(displayNum.textContent)
