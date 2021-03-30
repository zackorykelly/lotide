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

assertArraysEqual([1, 2, 3], [1, 2, 3]);
assertArraysEqual([1, 2, 3], [1, 2, '3']);
assertArraysEqual([1, 2, 3], [1, 2]);
assertArraysEqual(['1', '2', '3'], ['1', '2', '3']);