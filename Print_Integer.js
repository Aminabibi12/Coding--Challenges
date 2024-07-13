const readline = require('readline');

// Create interface for reading input
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

// Ask user to enter a number
rl.question('Enter the number: ', (input) => {
  // Convert input to integer
  let num = parseInt(input);

  // Check if num is NaN
  if (!isNaN(num)) {
    // Check if the number is even or odd
    if (num % 2 === 0) {
      console.log("The number is even:", num);
    } else {
      console.log("The number is odd:", num);
    }
  } else {
    console.log("Invalid input. Please enter a valid number.");
  }

  // Close the interface
  rl.close();
});
