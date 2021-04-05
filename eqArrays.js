const assertEqual = require('./assertEqual');

const eqArrays = function(firstArray, secondArray) {
  if (firstArray.length === secondArray.length) {
    for (let i = 0; i < firstArray.length; i++) {
      if (Array.isArray(firstArray[i])) {
        if (!eqArrays(firstArray[i], secondArray[i])) {
          return false;
        }
      } else {
        if (firstArray[i] !== secondArray[i]) {
          return false;
        }
      }
    }
    return true;
  }
  return false;
};

module.exports = eqArrays;