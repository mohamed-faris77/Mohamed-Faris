const readline = require("readline");

//Create readline
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});


rl.question("Enter a number: ", (input) => {
  const a = parseInt(input);
  let series = [];

  for (let i = 0; i < a; i++) {
    series.push(2 * i + 1);
  }

  console.log("Series:", series.join(", "));
  rl.close();
});
