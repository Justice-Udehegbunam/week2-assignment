// Get the birth year and current year of the user
let a = parseInt(prompt('Insert birth year.'));
let b = parseInt(prompt('Insert current year.'));

// SUbtarct the current year from the birth year and create a function to do that.

function calculateAge() {
  return b - a;
};

// Display it in console

console.log(calculateAge());

// Create an array of numbers
const numbersArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// Loop through the array and output even numbers
for (let i = 0; i < numbersArray.length; i++) {
  const number = numbersArray[i];

  if (number % 2 === 0) {
    console.log(number); // Output even numbers
  }
};
