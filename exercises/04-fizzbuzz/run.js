/**
 * A small function which requires the numbers 1 to 100 to be returned, with the following conditions:
 * If the number is divisible by 3, return "Fizz"
 * If the number is divisible by 5, return "Buzz"
 * If the number is divisible by 3 and 5, return "Fizzbuzz"
 * Otherwise simply return the number
 */
fizzBuzz = function (inputNumber) {
  let output = "";
  if(!(inputNumber % 3)){
    output += "Fizz";
  }
  if (!(inputNumber % 5)) {
    output += "Buzz";
  }
  if (inputNumber % 3 != 0 && inputNumber %5 != 0)
    output += inputNumber;
  return output;
};

module.exports = { fizzBuzz };
