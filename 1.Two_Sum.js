/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */

// Defind input
let nums = [2, 7, 11, 15];
let target = 9;

// Defind function
const twoSum = function (nums, target) {
  let result = [];
  for (let i = 0; i < nums.length; i++) {
    for (let x = i + 1; x < nums.length; x++) {
      if (nums[i] + nums[x] == target) {
        let ind1 = i;
        let ind2 = x;
        result.push(ind1, ind2);
      }
    }
  }
  if (result.length > 0) {
    return result;
  } else {
    console.log(
      "There is no result from the operation of any pair of numbers get results equal to target"
    );
  }
};

// Apply function
console.log(twoSum(nums, target));
