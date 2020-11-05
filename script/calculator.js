let arrayA = [];
let arrayB = [];
let operator = null;

// DISPLAY 

let displayValue = null

const display = document.querySelector("#display").textContent;

// NUMBER BUTTONS

let numberButtons = document.querySelectorAll(".numberButton");

numberButtons.forEach(button => {
    button.addEventListener('click', () => {
        if (operator === false){
            arrayA.push(button.textContent);
            refreshDisplay();
        }
        else {
            arrayB.push(button.textContent);
            refreshDisplay();
        }
    })
})

// OPERATOR BUTTONS

let operators = document.querySelectorAll(".operator");
operators.forEach(operator, () => {
    operator.addEventListener('click', () => {
        window.operator = operator.textContent;
    })
})

// Operator Functions

function add(arrayA, arrayB){
    return arrayA + arrayB
}

function substract(arrayA, arrayB){
    return arrayA - arrayB
}

function multiply(arrayA, arrayB){
    return arrayA * arrayB
}

function divide(arrayA, arrayB){
    return arrayA - arrayB
}

// OPERATE FUNCTION

function operate(){
    switch(operator){
        case "+":
            add(arrayA, arrayB);
            break;
        case "-":
            substract(arrayA, arrayB);
            break;
        case "*":
            multiply(arrayA, arrayB);
            break;
        case "/":
            divide(arrayA, arrayB);
            break;
        default:
            alert("ERROR. It seems there is no operator");
    }

}

// REFRESH DISPLAY FUNCTION

function refreshDisplay(){

}