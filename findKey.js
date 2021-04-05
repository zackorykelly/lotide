const findKey = function(object, callback) {
  for (const key in object) {
    if (callback(object[key])) {
      return key;
    }
  }
};

module.exports = findKey;


// const testObj = {
//   "Blue Hill": { stars: 1 },
//   "Akaleri": { stars: 3 },
//   "noma": { stars: 2 },
//   "elBulli": { stars: 3 },
//   "Ora": { stars: 2 },
//   "Akelarre": { stars: 3 }
// };

// assertEqual(findKey(testObj, x => x.stars === 3), 'Akaleri');
// assertEqual(findKey(testObj, x => x.stars === 1), 'Blue Hill');
// assertEqual(findKey(testObj, x => x.stars === 10), undefined);