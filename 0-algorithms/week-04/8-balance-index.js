/*
  Balance Index

  A balance index is an index where the sum of the elements to the left is equal
  to the sum of the elements to the right—excluding the value at the index itself.

  Return the index if such a point exists, otherwise return -1.
*/

const nums1 = [-2, 5, 7, 0, 3];
const expected1 = 2;

const nums2 = [9, 9];
const expected2 = -1;

/**
 * Finds the index in the array where the sum of all elements to the left
 * equals the sum of all elements to the right, excluding the value at the index.
 *
 * - Time: O(n^2) due to nested iterations via slice + reduce.
 * - Space: O(n) due to slicing.
 *
 * @param {Array<number>} nums - The input array of numbers.
 * @returns {number} The balance index, or -1 if none exists.
 */
function balanceIndex(nums) {
  for (let i = 0; i < nums.length; i++) {
    const leftSum = nums.slice(0, i).reduce((sum, val) => sum + val, 0);
    const rightSum = nums.slice(i + 1).reduce((sum, val) => sum + val, 0);
    if (leftSum === rightSum) {
      return i;
    }
  }
  return -1;
}

console.log(`${balanceIndex(nums1)} should equal ${expected1}`);
console.log(`${balanceIndex(nums2)} should equal ${expected2}`);
