const assertEqual = function(actual, expected) {
  const mad = String.fromCodePoint(0x1f621);
  const smile = String.fromCodePoint(0x1f600);
  if (actual === expected) {
    console.log(`${smile}${smile}${smile} Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`${mad}${mad}${mad} Assertion Failed: ${actual} !== ${expected}`);
  }
};

module.exports = assertEqual;