const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});


rl.question("Enter numbers separated by commas: ", (input) => {
  const numbers = input.split(",").map(num => parseInt(num.trim()));


  const counts = {};
  for (let i = 1; i <= 9; i++) {
    counts[i] = 0;
  }

  for (let i = 1; i <= 9; i++) {
    numbers.forEach(num => {
      if (num % i === 0) {
        counts[i]++;
      }
    });
  }

  console.log("Output:", counts);
  rl.close();
});
