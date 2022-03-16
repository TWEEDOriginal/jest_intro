const sum = require('../scripts/sum');

test('properly adds two numbers', () => {
  expect(sum(1, 2)).toBe(3);
  // avoid rounding error
  expect(sum(0.1, 0.2)).toBeCloseTo(0.3);
});