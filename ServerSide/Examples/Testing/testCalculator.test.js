const chai = require("chai");
const expect = chai.expect;
const { add, subtract, multiply, divide } = require("./calculator");

describe("Testing Calcultor Suite", function () {
  test("Testing 1st testcase, addition", () => {
    const result = add(5, 4);
    expect(result).to.be.equal(9);
    console.log("Testing addition");
  });
  test("Testing 2nd testcase, subtract", () => {
    const result = subtract(5, 4);
    expect(result).to.be.equal(1);
    console.log("Testing subtract");
  });
  test("Testing 3rd testcase, multiply", () => {
    const result = multiply(5, 4);
    expect(result).to.be.equal(20);
    console.log("Testing multiply");
  });
  test("Testing 4th testcase, divide", () => {
    const result = divide(5, 5);
    expect(result).to.be.equal(1);
    console.log("Testing divide");
  });
});
