
const assertEqual = require('../assertEqual');
const tail = require('../tail');

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