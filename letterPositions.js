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

const letterPositions = function(sentence) {
  const results = {};
  for (let i = 0; i < sentence.length; i++) {
    if (Array.isArray(results[sentence[i]])) {
      results[sentence[i]].push(i);
    } else {
      results[sentence[i]] = [i];
    }
  }
  return results;
};

const result1 = letterPositions('hello');
console.log(result1);

assertArraysEqual(result1['h'], [0]);
assertArraysEqual(result1['l'], [2, 3]);
assertArraysEqual(result1.e, [1]);