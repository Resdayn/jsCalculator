let arrayA = [];
let arrayB = [];
let operator = null;

// DISPLAY 

let displayValue = null

let display = document.querySelector("#display").textContent;

// NUMBER BUTTONS

let numberButtons = document.querySelectorAll(".numberButton");

numberButtons.forEach(button => {
    button.addEventListener('click', () => {
        console.log(`Button ${button.textContent} clicked!`)
        if (operator == null) {
            arrayA.push(button.textContent);
            refreshDisplay(arrayA);
        } else {
            arrayB.push(button.textContent);
            refreshDisplay(arrayB);
        }
    })
})

// OPERATOR BUTTONS

let operatorsButtons = document.querySelectorAll(".operator");
operatorsButtons.forEach(operatorButton => {
    operatorButton.addEventListener('click', () => {
        console.log(`Operator "${operatorButton.textContent}" Clicked!!`)
        operator = operatorButton.textContent;
    })
})

// EQUAL BUTTON

const equal = document.querySelector("#equal");

equal.addEventListener('click', () => {
    console.log("Equal Clicked!")
    document.querySelector("#display").textContent = operate();
    console.log(`Current`)
})

// CLEAR Button

const clear = document.querySelector('#clear');

clear.addEventListener('click', () => {
    console.log("Clear Clicked!");
    document.querySelector("#display").textContent = 0;
})

// Operator Functions

function add(arrayA, arrayB) {
    console.log(`Add() INVOKED: returned ${parseInt(arrayA.join(""), 10)} + ${parseInt(arrayB.join(""), 10)}`)
    let result = parseInt(arrayA.join(""), 10) + parseInt(arrayB.join(""), 10);
    console.log(`Add() is returning ${result}`)
    return result;
}

function substract(arrayA, arrayB) {
    console.log(`Add() INVOKED: returned ${arrayA.join() - arrayB.join()}`)
    return (arrayA.join("") - arrayB.join(""))
}

function multiply(arrayA, arrayB) {
    console.log(`Add() INVOKED: returned ${arrayA.join() * arrayB.join()}`)
    return (arrayA.join("") * arrayB.join(""))
}

function divide(arrayA, arrayB) {
    console.log(`Add() INVOKED: returned ${arrayA.join() / arrayB.join()}`)
    return (arrayA.join("") / arrayB.join(""))
}

// OPERATE FUNCTION

function operate() {
    switch (operator) {
        case "+":
            return add(arrayA, arrayB);
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

function refreshDisplay(array) {
    // Takes and array, joins all the value and sends them to the display node.
    displayValue = array.join("");
    document.querySelector("#display").textContent = displayValue;
}