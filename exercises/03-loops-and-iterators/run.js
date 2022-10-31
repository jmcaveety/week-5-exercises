/**
 * For an array of numbers,
 * add together every single number and return the result
 * use a simple for loop that checks the size of the array
 */
forLoops = function (inputArray) {
  let addSum = 0;
  for(let i = 0; i<inputArray.length;i++){
    addSum += inputArray[i];
  }
  return addSum;
};

/**
 * for a given array of numbers
 * add every single number and return the result
 * use a fancy-pants array reduce instead for a more concise and functional style
 * @see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/reduce
 */
usingArrayReduce = function (inputArray) {
  return inputArray.reduce((x, y) => x+y);
};

module.exports = {
  forLoops,
  usingArrayReduce
};
