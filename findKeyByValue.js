const findKeyByValue = function(inputObject, valueToFind) {
  const keys = Object.keys(inputObject);
  for (const key of keys) {
    if (inputObject[key] === valueToFind) {
      return key;
    }
  }
  return undefined;
};

module.exports = findKeyByValue;

// const bestTVShowsByGenre = {
//   sciFi: "The Expanse",
//   comedy: "Brooklyn Nine-Nine",
//   drama: "The Wire"
// };

// assertEqual(findKeyByValue(bestTVShowsByGenre, "The Wire"), "drama");
// assertEqual(findKeyByValue(bestTVShowsByGenre, "That '70s Show"), undefined);

// const bestTVShowsByGenre2 = {
//   sciFi: 1234,
//   comedy: 5678,
//   drama: undefined
// };

// assertEqual(findKeyByValue(bestTVShowsByGenre2, 1234), "sciFi");
// assertEqual(findKeyByValue(bestTVShowsByGenre2, ""), undefined);