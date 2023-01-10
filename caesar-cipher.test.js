const caesarCipher = require('./caesar-cipher');

test("encrypt hello", () => {
  expect(caesarCipher("hello", 5)).toBe("mjqqt");
});
