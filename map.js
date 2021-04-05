const map = function(array, callback) {
  const results = [];

  for (let item of array) {
    results.push(callback(item));
  }
  return results;
};

module.exports = map;

// const words = ["ground", "control", "to", "major", "tom"];
// const results1 = map(words, word => word[0]);
// console.log(results1);
// const results2 = map([1, 2, 3], item => item + 1);
// console.log(results2);

// assertArraysEqual(map([1, 2, 3], item => item + 1), [2, 3, 4]);
// assertArraysEqual(map(['apple', 'bear', 'bat'], item => item[1]), ['p', 'e', 'a']);