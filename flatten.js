const flatten = function(originalArray) {
  let newArray = [];
  for (let i = 0; i < originalArray.length; i++) {
    let currentElement = originalArray[i];
    if (Array.isArray(currentElement)) {
      for (let j = 0; j < currentElement.length; j++) {
        newArray.push(currentElement[j]);
      }
    } else {
      newArray.push(currentElement);
    }
  }
  return newArray;
};

module.exports = flatten;

// assertArraysEqual(flatten([1, 2, 3]), [1, 2, 3]);
// assertArraysEqual(flatten([1, [2], 3]), [1, 2, 3]);
// assertArraysEqual(flatten([1, [2, 3]]), [1, 2, 3]);
// assertArraysEqual(flatten([1, [2], [3]]), [1, 2, 3]);