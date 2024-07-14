const readline = require('readline');

// Create interface for reading input
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

// Ask user to enter the first number
rl.question('Enter the first number: ', (input1) => {
  // Convert input to integer
  let num1 = parseInt(input1);

  // Ask user to enter the second number
  rl.question('Enter the second number: ', (input2) => {
    // Convert input to integer
    let num2 = parseInt(input2);

    // Calculate the sum
    let sum = num1 + num2;

    // Display the sum
    console.log('The sum of', num1, 'and', num2, 'is:', sum);

    // Close the interface
    rl.close();
  });
});
