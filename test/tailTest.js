const tail = require('../tail');
const assert = require('chai').assert;

describe("#tail", () => {
  it("[1,2,3,4,5] should return [2,3,4,5] (happy path)", () => {
    assert.deepEqual(tail([1, 2, 3, 4, 5]), [2, 3, 4, 5]);
  });

  it("['hello'] should return [] (single item)", () => {
    assert.deepEqual(tail(['hello']), []);
  });

  it("['hello', 'goodbye'] should return ['goodbye'] (two string items)", () => {
    assert.deepEqual(tail(['hello', 'goodbye']), ['goodbye']);
  });

  it("[] should return [] (empty array case)", () => {
    assert.deepEqual(tail([]), []);
  });
});