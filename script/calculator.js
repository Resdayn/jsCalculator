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

        console.log("setDisplay Fired!");
        if (this.display === "0"){
            this.display = number;
            console.log(`setDisplay is now ${this.display}`);
        }
        
        this.display = this.display.concat(number);
        console.log(`Concatenation for display triggered -> ${this.display}`);    
        
        
    }

    refreshDisplay(div){
        if (this.operator != ""){
            document.getElementById("display").textContent = this.secondValue;
        }
        document.getElementById("display").textContent = this.display;
        
    }

    setSecondValue(number){
        console.log("setSecondValue Fired!");
        if (this.secondValue == ""){
            this.secondValue = number;
            console.log(`setDisplay is now ${this.secondValue}`);
        }
        this.secondValue = this.secondValue.concat(number);
        console.log(`setDisplay is now ${this.secondValue}`);
    }

    setOperator(operator){
        this.operator = operator;
    }

    operate(){
        switch (this.operator) {
            case "+":
                this.setDisplay(this.add(this.display, secondValue));
            case "-":
                this.setDisplay(this.substract(this.display, secondValue));
            case "*":
                this.setDisplay(this.multiply(this.display, secondValue));
            case "/":
                this.setDisplay(this.divide(this.display, secondValue));
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
        console.log(`Button ${button.textContent} clicked!`);
        
        if ((calculator.display != "") && (calculator.operator != "")){
            // if there is an operator already and you press a number, it should go to the secondValue and display it.
            document.getElementById("display").textContent = "";
            calculator.setSecondValue(button.textContent);
            calculator.refreshDisplay();
        }

        if ((calculator.display != "") && (calculator.isSavedResult = true)) {
            // Resets the entire calculator if you press any number when there is a saved result in memory.
            calculator.clearDisplay();
            calculator.setDisplay(button.textContent);
            calculator.refreshDisplay();

        } else {
            // The default behavior is to push the number to the display value
            calculator.setDisplay(button.textContent);
            calculator.refreshDisplay();
        }
        
    })
})

// Assign an event listener for each Operator button

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