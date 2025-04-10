// Question 2: DSA Given an array of integers nums and an integer target, return the indices of the two
// numbers such that they add up to target. You may assume that each input would have exactly one
// solution, and you may not use the same element twice. You can return the answer in any order.
// For example, given:
// const nums = [2, 7, 11, 15];
// const target = 9;
// The function should return [0, 1] because nums[0] + nums[1] = 2 + 7 = 9.

function targetSum(nums, target) {
    // Edge Case to Handle Array Length to have atlease 2 Numbers.
    if(nums.length < 2) {
        throw new Error("Array must have at least two numbers");
    }

     // Initialize a hash map to store number and their indices
  const map = new Map();

  // Iterate over the array
  for (let i = 0; i < nums.length; i++) {
    // Calculate the complement of the current number
    const complement = target - nums[i];

    // Check if the complement is already in the hash map
    if (map.has(complement)) {
      // If found, return the indices of the two numbers
      return [map.get(complement), i];
    }

    // Otherwise, store the current number and its index in the hash map
    map.set(nums[i], i);
  }

  // If no solution is found (though the problem guarantees one), throw an error
  throw new Error("No two sum solution exists.");
}


const nums = [2, 11, 7, 15];
const target = 26;
try {
  const result = targetSum(nums, target);
  console.log(result);
} catch (error) {
  console.error(error.message);
}