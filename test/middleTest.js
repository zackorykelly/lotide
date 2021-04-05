const middle = require('../middle');
const assert = require('chai').assert;

describe("#middle", () => {
  it("[1,2,3,4,5] should return [3] (odd length)", () => {
    assert.deepEqual(middle([1, 2, 3, 4, 5]), [3]);
  });

  it("[1,2,3,4,5,6] should return [3,4] (even length)", () => {
    assert.deepEqual(middle([1, 2, 3, 4, 5, 6]), [3, 4]);
  });

  it("[] should return [] (empty array)", () => {
    assert.deepEqual(middle([]), []);
  });

  it("[1] should return [] (single item array)", () => {
    assert.deepEqual(middle([1]), []);
  });
});