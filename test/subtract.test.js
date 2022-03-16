const subtract = require('../scripts/subtract');

test('properly subtracts two numbers', () => {
  expect(subtract(5,2)).toBe(3);
});