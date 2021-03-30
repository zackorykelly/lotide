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

const without = function(source, itemsToRemove) {
  if (itemsToRemove.length === 0) {
    return source;
  }
  let outputArray = [];
  for (let i = 0; i < source.length; i++) {
    for (let j = 0; j < itemsToRemove.length; j++) {
      if (source[i] === itemsToRemove[j]) {
        continue;
      }
      outputArray.push(source[i]);
    }
  }
  return outputArray;

};

assertArraysEqual(without([1, 2, 3], [2]), [1, 3]);
assertArraysEqual(without(['1', '2', '3'], ['2']), ['1', '3']);
assertArraysEqual(without([1, 2, 3], ['2']), [1, 2, 3]);
assertArraysEqual(without([1, 2, 3], []), [1, 2, 3]);

const words = ['hello', 'world', 'lighthouse'];
without(words, ['lighthouse']);
assertArraysEqual(words, ['hello', 'world', 'lighthouse'])