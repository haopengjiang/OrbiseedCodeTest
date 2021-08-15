const { findValueWithLabel } = require("../../utils/utils.js");
const expect = require("chai").expect;

describe("find value with min label ", function () {
  it("should find value with min label", function () {
    expect(findValueWithLabel(["max:26000", "min:25000"],'min')).to.equal(25000);
  });
});

describe("find value with max label ", function () {
  it("should find value with max label", function () {
    expect(findValueWithLabel(["max:26000", "min:25000"],'max')).to.equal(26000);
  });
});
