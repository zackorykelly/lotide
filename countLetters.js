const mad = String.fromCodePoint(0x1f621);
const smile = String.fromCodePoint(0x1f600);

const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`${smile}${smile}${smile} Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`${mad}${mad}${mad} Assertion Failed: ${actual} !== ${expected}`);
  }
};

const countLetters = function(inputString) {
  const results = {};
  for (const letter of inputString) {
    if (letter !== ' ') {
      if (results[letter]) {
        results[letter] += 1;
      } else {
        results[letter] = 1;
      }
    }
  }
  return results;
};

const result1 = countLetters('lighthouse in the house');

assertEqual(result1['h'], 4);
assertEqual(result1['l'], 1);
assertEqual(result1['z'], undefined);