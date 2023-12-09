/**
 * @param {number[]} nums
 * @return {boolean}
 */

// Defind input
const mockNumber = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};
const mockInput = () => {
  let mockResult = [];
  const min = Math.pow(-10, 9);
  const max = Math.pow(10, 9);
  const numLength = mockNumber(1, Math.pow(10, 5));
  for (let i = 1; i <= numLength; i++) {
    let mockNum = mockNumber(min, max);
    mockResult.push(mockNum);
  }
  return mockResult;
};
let nums = mockInput();

// Defind function
const containsDuplicate = (nums) => {
  let result = null;
  // Assending sort
  let num = nums.sort((a, b) => {
    return a - b;
  });
  if (num.length !== 1) {
    for (let i = 0; i < num.length - 1; i++) {
      if (Number(num[i]) == Number(num[i + 1])) {
        result = true;
        break;
      } else {
        result = false;
      }
    }
  } else {
    result = false;
  }
  return result;
};

// Apply function
console.log("nums is duplicate? " + containsDuplicate(nums));
