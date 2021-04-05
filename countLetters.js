const countLetters = function(inputString) {
  const results = {};
  for (const letter of inputString) {
    if (letter !== ' ') {
      if (results[letter]) {
        results[letter] += 1;
      } else {
        results[letter] = 1;
      }
    }
  }
  return results;
};

// const result1 = countLetters('lighthouse in the house');

// assertEqual(result1['h'], 4);
// assertEqual(result1['l'], 1);
// assertEqual(result1['z'], undefined);

module.exports = countLetters;