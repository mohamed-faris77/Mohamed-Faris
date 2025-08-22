const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});


rl.question("Enter a number: ", (input) => {
  const a = parseInt(input);
  let series = [];

  const count = (a % 2 === 0) ? a - 1 : a;


  for (let i = 0; i < count; i++) {
    series.push(2 * i + 1);
  }

  console.log("Series:", series.join(", "));
  rl.close();
});
