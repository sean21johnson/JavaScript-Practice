// Create a function that prints even numbers
function printEvenNums(num) {
  for (let i = 0; i < num; i += 2) {
    console.log(i);
  }
}

// Use a while loop to calculate the factorial of a number
function calculateFactorial(num) {
  let result = num;
  num--;

  while (num > 1) {
    result *= num;
    num--;
  }

  return result;
}

// Write a do-while loop that reverses a string
function reverseStr(str) {}
