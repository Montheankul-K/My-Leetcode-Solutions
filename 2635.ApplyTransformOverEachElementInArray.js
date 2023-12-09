/**
 * @param {number[]} arr
 * @param {Function} fn
 * @return {number[]}
 */

// Defind input
const plusI = (n, i) => {
  return n + i;
};
const mockNumber = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};
const mockInput = () => {
  let mockResult = [];
  const min = Math.pow(-10, 9);
  const max = Math.pow(10, 9);
  const numLength = mockNumber(0, 1000);
  for (let i = 1; i <= numLength; i++) {
    let mockNum = mockNumber(min, max);
    mockResult.push(mockNum);
  }
  return mockResult;
};
let arr = mockInput();

// Defind function
const map = function (arr, fn) {
  for (let i = 0; i < arr.length; i++) {
    arr[i] = fn(arr[i], i);
  }
  return arr;
};

// Apply function
console.log(map(arr, plusI));
