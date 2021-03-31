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

const middle = function(array) {
  let newArray = [];
  let middleIndex = Math.floor(array.length / 2);
  if (middleIndex > 1) {
    if (array.length % 2 === 0) {
      newArray.push(array[middleIndex - 1]);
    }
    newArray.push(array[middleIndex]);
  }
  return newArray;
};

assertArraysEqual(middle([1, 2, 3, 4, 5]), [3]);
assertArraysEqual(middle([1, 2, 3, 4, 5, 6]), [3, 4]);
assertArraysEqual(middle([]), []);
assertArraysEqual(middle([1]), []);