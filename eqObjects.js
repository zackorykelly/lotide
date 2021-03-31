const mad = String.fromCodePoint(0x1f621);
const smile = String.fromCodePoint(0x1f600);

const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`${smile}${smile}${smile} Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`${mad}${mad}${mad} Assertion Failed: ${actual} !== ${expected}`);
  }
};

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

const a = { a: 1, b: 1 };
const b = { b: 1, a: 1 };
const c = { cow: 5, potato: 6 };
const d = { potato: 6 };

assertEqual(eqObjects(a, b), true);
assertEqual(eqObjects(b, a), true);
assertEqual(eqObjects(a, c), false);
assertEqual(eqObjects(c, d), false);

const cd = { c: "1", d: ["2", 3] };
const dc = { d: ["2", 3], c: "1" };
assertEqual(eqObjects(cd, dc), true); // => true

const cd2 = { c: "1", d: ["2", 3, 4] };
assertEqual(eqObjects(cd, cd2), false); // => false