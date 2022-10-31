/**
 * return true if even number
 * return false if and odd number
 */
isNumberEven = function (inputValue) {
  return inputValue%2==0;
};

/**
 * return true if number is between 12 and 19
 * return true if number is 3333
 * return false if number is anything else
 */
complexIfStatements = function (inputValue) {
  if (inputValue >= 12 && inputValue <= 19)
      return true;
  else if (inputValue == 3333)
    return true;
  return false;
};


/**
 * if 0 is sent in, return Monday, 1=Tuesday ... 6=Sunday
 * if any other number is sent in throw an error
 * if anything other than a number is sent in, throw an error
 */
switchStatements = function (numberOfDayOfWeek) {
  switch (numberOfDayOfWeek) {
    case 0:
      return "Monday";
    case 1:
      return "Tuesday";
    case 2:
      return "Wednesday";
    case 3:
      return "Thursday";
    case 4:
      return "Friday";
    case 5:
      return "Saturday";
    case 6:
      return "Sunday";
    default:
      throw new TypeError("Day was not recognised");

  }
  return 0;
};

module.exports = {
  isNumberEven,
  complexIfStatements,
  switchStatements
};
