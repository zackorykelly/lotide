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

module.exports = takeUntil;