const mad = String.fromCodePoint(0x1f621);
const smile = String.fromCodePoint(0x1f600);

const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`${smile}${smile}${smile} Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`${mad}${mad}${mad} Assertion Failed: ${actual} !== ${expected}`);
  }
};

const findKeyByValue = function(inputObject, valueToFind) {
  const keys = Object.keys(inputObject);
  for (const key of keys) {
    if (inputObject[key] === valueToFind) {
      return key;
    }
  }
  return undefined;
};

const bestTVShowsByGenre = {
  sciFi: "The Expanse",
  comedy: "Brooklyn Nine-Nine",
  drama: "The Wire"
};

assertEqual(findKeyByValue(bestTVShowsByGenre, "The Wire"), "drama");
assertEqual(findKeyByValue(bestTVShowsByGenre, "That '70s Show"), undefined);

const bestTVShowsByGenre2 = {
  sciFi: 1234,
  comedy: 5678,
  drama: undefined
};

assertEqual(findKeyByValue(bestTVShowsByGenre2, 1234), "sciFi");
assertEqual(findKeyByValue(bestTVShowsByGenre2, ""), undefined);