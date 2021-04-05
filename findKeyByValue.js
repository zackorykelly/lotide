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