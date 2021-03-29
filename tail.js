const mad = String.fromCodePoint(0x1f621);
const smile = String.fromCodePoint(0x1f600);

const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`${smile}${smile}${smile} Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`${mad}${mad}${mad} Assertion Failed: ${actual} !== ${expected}`);
  }
};

const tail = function(input) {
  return (input.slice(1));
};

assertEqual(String(tail([1, 2, 3, 4, 5])), '2,3,4,5');
assertEqual(String(tail(['hello'])), '');
assertEqual(String(tail(['hello', 'goodbye'])), 'goodbye');
assertEqual(String(tail([])), '');

const result = tail(["Hello", "Lighthouse", "Labs"]);
assertEqual(result.length, 2); // ensure we get back two elements
assertEqual(result[0], "Lighthouse"); // ensure first element is "Lighthouse"
assertEqual(result[1], "Labs"); // ensure second element is "Labs"

const words = ["Yo Yo", "Lighthouse", "Labs"];
tail(words); // no need to capture the return value since we are not checking it
assertEqual(words.length, 3); // original array should still have 3 elements!

const result2 = tail([1]);
console.log(result2);

const result3 = tail([]);
console.log(result3);