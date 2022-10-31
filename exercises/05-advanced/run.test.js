const assert = require("chai").assert;
const code = require("./run.js");

describe("Code works", () => {
  it("String hello is reversed", () => {
     assert.equal(reverse("hello"), "olleh");
   });

  it("Array has duplicates removed", () => {
    assert.deepEqual(removeDuplicates([1, 2, 2, 3, 4, 5]), [1, 2, 3, 4, 5]);
  });

  // it("returns 7 for the number 7", () => {
  //   assert.equal(fizzBuzz(7), 7);
  // });

  // it('returns "Fizz" for the number 3', () => {
  //   assert.equal(fizzBuzz(3), "Fizz");
  // });

  // it('returns "Fizz" for the number 9', () => {
  //   assert.equal(fizzBuzz(9), "Fizz");
  // });

  // it('returns "Buzz" for the number 5', () => {
  //   assert.equal(fizzBuzz(5), "Buzz");
  // });

  // it('returns "Buzz" for the number 10', () => {
  //   assert.equal(fizzBuzz(10), "Buzz");
  // });

  // it('returns "fizzBuzz" for the number 15', () => {
  //   assert.equal(fizzBuzz(15), "FizzBuzz");
  // });

  // it('returns "FizzBuzz" for the number 30', () => {
  //   assert.equal(fizzBuzz(30), "FizzBuzz");
  // });


});
