import { HashTable } from '../hash-table.js';

/**
 * Two Sum — find indices of the two numbers such that they add up to target.
 * Uses the custom HashTable (array-backed buckets) for O(n) average time.
 *
 * Returns the first pair of indices found in left-to-right order [i, j] (i < j),
 * or null if no such pair exists. Assume that each input would have
 * exactly one solution or no solutions, and you may not use the same element
 * twice.
 *
 * @param {number[]} nums - Array of numbers.
 * @param {number} target - Target sum.
 * @returns {[number, number] | null}
 */
function twoSum(nums, target) {
  const table = new HashTable(Math.max(16, nums.length * 2));

  for (let i = 0; i < nums.length; i++) {
    const n = nums[i];
    const complement = target - n;
    const compKey = String(complement);
    if (table.has(compKey)) {
      const j = table.get(compKey);
      return [j, i];
    }
    // store current index by value key
    table.set(String(n), i);
  }
  return null;
}

export { twoSum };
