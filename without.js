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