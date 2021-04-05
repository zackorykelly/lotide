const assertEqual = require('../assertEqual');
const head = require('../head');

//Tests
assertEqual(head([1, 2, 3]), 1);
assertEqual(head([]), undefined);
assertEqual(head(['hello', 'goodbye']), 'hello');
assertEqual(head([5]), 5);