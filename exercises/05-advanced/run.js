reverse = function(string2Flip){
  let tempString = "";
  for(let i = string2Flip.length-1; i>= 0 ; i--)
     tempString += string2Flip[i];
  return tempString;
};

altReverse = function(stringToFlip) {
  return stringToFlip.split("").reverse().join("");
};

removeDuplicates = function (array) {
  let withoutDuplicates = [];
  console.log(array);
  for (let i = 0; i < array.length; i++) {
    let x = array[i];
    console.log(x);
    if (!withoutDuplicates.includes(x))
      withoutDuplicates.push(x);
  }
  return withoutDuplicates;
};

toryLength =

module.exports = {reverse, removeDuplicates};
