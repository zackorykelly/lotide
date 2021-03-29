const mad = String.fromCodePoint(0x1f621);
const smile = String.fromCodePoint(0x1f600);

const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`${smile}${smile}${smile} Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`${mad}${mad}${mad} Assertion Failed: ${actual} !== ${expected}`);
  }
};

const head = function(input) {
  return (input[0]);
};

assertEqual(head([1, 2, 3]), 1);
assertEqual(head([]), undefined);
assertEqual(head(['hello', 'goodbye']), 'hello');
assertEqual(head([5]), 5);