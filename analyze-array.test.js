const analyzeArray = require("./analyze-array");

test("analyze array", () => {
  expect(analyzeArray([32, 1, 3, 28])).toStrictEqual({min: 1, max: 32, length: 4, average: 16});
});
