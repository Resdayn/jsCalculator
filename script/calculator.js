class Calculator {
    constructor(){
        this.display;
        this.secondValue;
        this.operator;
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
        this.display = 0;
        this.operator = null;
    }

    setDisplay(number){
        if (this.display == null){
            this.display = number;
        }
        this.display = this.display.push(number);
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
}
// Creates the calculator from the Calculator class
let calculator = new Calculator();

// Assigns an event listener for each number
let numberButtons = document.querySelectorAll(".numberButton");

numberButtons.forEach(button => {
    button.addEventListener('click', () => {
        console.log(`Button ${button.textContent} clicked!`)
        if (calculator.secondValue != null) {
            calculator.clearDisplay();
            calculator.setDisplay(button.textContent);

        } else {
            calculator.setDisplay(button.textContent);
        }
    })
})