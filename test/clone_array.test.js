const clone_array = require("../scripts/clone_array");

test("properly clones array", () => {
  const array = [1, 2, 3];
  // ensure values are equal
  expect(clone_array(array)).toEqual(array); 

  // ensure it isn't returning the original array
  expect(clone_array(array)).not.toBe(array); 
});
