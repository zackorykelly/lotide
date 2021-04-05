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

module.exports = letterPositions;

// const result1 = letterPositions('hello');
// console.log(result1);

// assertArraysEqual(result1['h'], [0]);
// assertArraysEqual(result1['l'], [2, 3]);
// assertArraysEqual(result1.e, [1]);