/**
 * @param {string} val
 * @return {Object}
 */

// Defind function
const expect = function (val) {
  const expectNum = val;
  return {
    toBe: (num) => {
      if (expectNum === num) {
        // Use comment line in Leetcode
        // return true
        return { value: true };
      } else {
        // throw "Not Equal"; result is {"error": "Not Equal"}
        return { error: "Not Equal" };
      }
    },
    notToBe: (num) => {
      if (expectNum !== num) {
        // return true
        return { value: true };
      } else {
        // throw "Equal";
        return { error: "Equal" };
      }
    },
  };
};

// Apply function
console.log(expect(5).toBe(5));
console.log(expect(5).notToBe(5));
