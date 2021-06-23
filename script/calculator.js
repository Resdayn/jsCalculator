class Calculator {
    constructor(){
        this.display = ""; // used as "value one"
        this.secondValue = ""; 
        this.operator = "";
        this.isSavedResult = false; // Flag that indicates is the value in display is the saved result of an earlier operation.
    }

    add(number1, number2){
        return number1 + number2;
    }

    substract(number1, number2){
        return number1 - number2;
    }

    multiply(number1, number2){
        return number1 * number2;
    }

    divide(number1, number2){
        return number1 / number2;
    }

    clearDisplay(){
        this.display = "0";
        this.operator = "";
        this.isSavedResult = false;
    }

    setDisplay(number){
        // Pushes numbers to the display variable

        console.log(`setDisplay Invoked! Current display: ${this.display}`);
        if (this.display == "0"){
            this.display = number;
            console.log(`Added number: ${number}. Display: ${this.display} `);
        } else {
            this.display = this.display.concat(number);
            console.log(`Concatenation for display triggered -> number: ${number}. Display: ${this.display}`);   
        }
        
          
        
        
    }

    refreshDisplay(div){
        console.log("refreshDisplay INVOKED");
        if (this.operator != ""){
            document.getElementById("display").textContent = this.secondValue;
        } else {
           document.getElementById("display").textContent = this.display; 
        }
    }

    setSecondValue(number){
        console.log("setSecondValue Fired!");
        if (this.secondValue == ""){
            this.secondValue = number;
            console.log(`secondValue is now ${this.secondValue}`);
        } else {
            this.secondValue = this.secondValue.concat(number);
            console.log(`secondValue is now ${this.secondValue}`); 
        }
    }

    clearSecondValue(){
        this.secondValue = "";
    }

    setOperator(operator){
        this.operator = operator;
    }

    operate(){
        switch (this.operator) {
            case "+":
                let addResult = this.add(parseInt(this.display), parseInt(this.secondValue));
                this.operator = "";
                this.clearSecondValue();
                this.display = addResult.toString();
                this.refreshDisplay();
                break;
            case "-":
                let substractResult = this.substract(parseInt(this.display), parseInt(this.secondValue));
                this.operator = "";
                this.clearSecondValue();
                this.display = substractResult.toString();
                this.refreshDisplay();
                break;
            case "*":
                let multiplyResult = this.multiply(parseInt(this.display), parseInt(this.secondValue));
                this.operator = "";
                this.clearSecondValue();
                this.display = multiplyResult.toString();
                this.refreshDisplay();
                break;
            case "/":
                let divideResult = this.divide(parseInt(this.display), parseInt(this.secondValue));
                this.operator = "";
                this.clearSecondValue();
                this.display = divideResult.toString();
                this.refreshDisplay();
                break;
            default:
                console.log("ERROR. It seems there is no operator");
        }
    
    }
} // End of Class Calculator


// Creates the calculator from the Calculator class
let calculator = new Calculator();

// Assigns an event listener for each number button
let numberButtons = document.querySelectorAll(".numberButton");

numberButtons.forEach(button => {
    button.addEventListener('click', () => {
        if ((calculator.display != "") && (calculator.operator != "")){
            // if there is an operator already and you press a number, it should go to the secondValue and display it.
            console.log("Triggered 'an operator already and you press a number'")
            document.getElementById("display").textContent = "";
            calculator.setSecondValue(button.textContent);
            calculator.refreshDisplay();
        }

        else if ((calculator.display != "") && (calculator.isSavedResult == true)) {
            // Resets the entire calculator if you press any number when there is a saved result in memory.
            console.log("Triggered 'press any number when there is a saved result in memory'")
            calculator.clearDisplay();
            calculator.setDisplay(button.textContent);
            calculator.refreshDisplay();

        } else {
            // The default behavior is to push the number to the display value
            console.log("Triggered Default button behavior");
            calculator.setDisplay(button.textContent);
            calculator.refreshDisplay();    
        }

        // TODO: add conditional so if you press a number when isSavedResult=true and there is no operator, it will reset the calculator.

        // TODO: add conditional so if you press a number when isSavedResult=true and there is an operator, the number will be added to the secondValue 
        
        
        
    })
})

// Assigns an event listener for each Operator button

let operatorsButtons = document.querySelectorAll(".operator");
operatorsButtons.forEach(operatorButton => {
    operatorButton.addEventListener('click', () => {
        console.log(`Operator "${operatorButton.textContent}" Clicked!!`)
        calculator.setOperator(operatorButton.textContent);
        console.log(`Operator is now set to ${this.operator}`);
        // Triggers the operate function if there are already 2 values and you click an operator 
        if ((calculator.display != "") && (calculator.secondValue != "")) {
            calculator.operate();
            calculator.setOperator("");
        }       
    })
})

// Assigns the EQUAL button

const equal = document.querySelector("#equal");

equal.addEventListener('click', () => {
    console.log("--- Equal Clicked! ---");
    calculator.operate();
    this.isSavedResult = true;
})

// Assigns the CLEAR Button

const clear = document.querySelector('#clear');

clear.addEventListener('click', () => {
    console.log("Clear Clicked!");
    calculator.clearDisplay();
    calculator.clearSecondValue();
    calculator.refreshDisplay();
})
