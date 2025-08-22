const readline = require("readline");

class Calculator {
  constructor(a, b) {
    this.a = a;
    this.b = b;
  }

  calculate(operation) {
    switch (operation.toLowerCase()) {
      case "add":
      case "+":
        return this.a + this.b;
      case "subtract":
      case "-":
        return this.a - this.b;
      case "multiply":
      case "*":
        return this.a * this.b;
      case "divide":
      case "/":
        if (this.b === 0) {
          return "Division by zero is not possible";
        }
        return this.a / this.b;
      default:
        return "Please mention the correct operation";
    }
  }
}


const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question("Enter first number: ", (num1) => {
  rl.question("Enter second number: ", (num2) => {
    rl.question("Enter operation (+, -, *, / or add, subtract, multiply, divide): ", (op) => {
      const calc = new Calculator(parseFloat(num1), parseFloat(num2));
      console.log(`Result: ${calc.calculate(op)}`);
      rl.close();
    });
  });
});
