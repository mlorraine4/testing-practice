const reverseString = require('./reverse');
const reverseStringRecursive = require('./reverse')

test("reverses sentence", () => {
  expect(reverseString("my cat benjen is the sweetest cat.")).toBe(
    ".tac tseteews eht si nejneb tac ym"
  );
});

test("reverses sentence", () => {
  expect(reverseStringRecursive("my cat benjen is the sweetest cat.")).toBe(
    ".tac tseteews eht si nejneb tac ym"
  );
});
