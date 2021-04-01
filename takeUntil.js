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

const assertArraysEqual = function(array1, array2) {
  if (eqArrays(array1, array2)) {
    console.log(`${smile}${smile}${smile} Assertion Passed: ${array1} === ${array2}`);
  } else {
    console.log(`${mad}${mad}${mad} Assertion Failed: ${array1} !== ${array2}`);
  }
};

const takeUntil = function(array, callback) {
  const result = [];
  for (const value of array) {
    if (callback(value)) {
      return result;
    } else {
      result.push(value);
    }
  }
  return result;
};

const data1 = [1, 2, 5, 7, 2, -1, 2, 4, 5];
const results1 = takeUntil(data1, x => x < 0);
console.log(results1);

console.log('---');

const data2 = ["I've", "been", "to", "Hollywood", ",", "I've", "been", "to", "Redwood"];
const results2 = takeUntil(data2, x => x === ',');
console.log(results2);