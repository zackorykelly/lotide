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

module.exports = without;

// assertArraysEqual(without([1, 2, 3], [2]), [1, 3]);
// assertArraysEqual(without(['1', '2', '3'], ['2']), ['1', '3']);
// assertArraysEqual(without([1, 2, 3], ['2']), [1, 2, 3]);
// assertArraysEqual(without([1, 2, 3], []), [1, 2, 3]);

// const words = ['hello', 'world', 'lighthouse'];
// without(words, ['lighthouse']);
// assertArraysEqual(words, ['hello', 'world', 'lighthouse']);