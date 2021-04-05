const eqArrays = require('./eqArrays');

const assertArraysEqual = function(array1, array2) {
  const mad = String.fromCodePoint(0x1f621);
  const smile = String.fromCodePoint(0x1f600);
  if (eqArrays(array1, array2)) {
    console.log(`${smile}${smile}${smile} Assertion Passed: ${array1} === ${array2}`);
  } else {
    console.log(`${mad}${mad}${mad} Assertion Failed: ${array1} !== ${array2}`);
  }
};


module.exports = assertArraysEqual;