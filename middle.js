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

module.exports = middle;