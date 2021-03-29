const mad = String.fromCodePoint(0x1f621);
const smile = String.fromCodePoint(0x1f600);

const assertEqual = function (actual, expected) {
  if (actual === expected) {
    console.log(`${smile}${smile}${smile} Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`${mad}${mad}${mad} Assertion Failed: ${actual} !== ${expected}`);
  }
};

//Test

assertEqual('Lighthouse Labs', 'Bootcamp');
assertEqual(1, 1);
assertEqual(1.1, 1);