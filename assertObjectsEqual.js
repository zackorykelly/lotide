const mad = String.fromCodePoint(0x1f621);
const smile = String.fromCodePoint(0x1f600);

const eqArrays = function(firstArray, secondArray) {
  if (firstArray.length === secondArray.length) {
    for (let i = 0; i < firstArray.length; i++) {
      if (firstArray[i] !== secondArray[i]) {
        return false;
      }
    }
    return true;
  }
  return false;
};

// Return true if both objects have identical keys and values.
// Otherwise return false
const eqObjects = function(object1, object2) {
  if (Object.keys(object1).length === Object.keys(object2).length) {
    for (const key in object1) {
      if (Array.isArray(object1[key])) {
        if (!eqArrays(object1[key], object2[key])) {
          return false;
        }
      } else {
        if (object1[key] !== object2[key]) {
          return false;
        }
      }
    }
    return true;
  } else {
    return false;
  }
};

const assertObjectsEqual = function(actual, expected) {
  const inspect = require('util').inspect;
  if (eqObjects(actual, expected)) {
    console.log(`${smile}${smile}${smile} Assertion Passed: ${inspect(actual)} === ${inspect(expected)}`);
  } else {
    console.log(`${mad}${mad}${mad} Assertion Failed: ${inspect(actual)} !== ${inspect(expected)}`);
  }
};


assertObjectsEqual({}, {});
assertObjectsEqual({ a: 1, b: 2 }, { b: 2, a: 1 });
assertObjectsEqual({}, { a: 1 });
