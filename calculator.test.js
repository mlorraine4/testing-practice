const calculator = require('./calculator');

test("calculate", () => {
  expect(calculator.add(25,6)).toBe(31);
});

test("calculate", () => {
  expect(calculator.subtract(25, 6)).toBe(19);
});

test("calculate", () => {
  expect(calculator.multiply(2, 6)).toBe(12);
});

test("calculate", () => {
  expect(calculator.divide(25, 5)).toBe(5);
});