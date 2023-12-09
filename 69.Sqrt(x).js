/**
 * @param {number} x
 * @return {number}
 */

// Defind input
const randomInt = (max) => {
  return Math.floor(Math.random() * max);
};
const max = Math.pow(2, 31) - 1;
let x = randomInt(max);

// Defind function
const mySqrt = (x) => {
  return Math.floor(Math.sqrt(x));
};

// Apply function
console.log(mySqrt(x));
