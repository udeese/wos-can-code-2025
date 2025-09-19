import { HashTable } from '../hash-table.js';

/**
 * Contains Duplicate — returns true if any value appears at least twice.
 * Uses the custom HashTable for O(n) average time membership checks.
 *
 * @param {number[]} nums
 * @returns {boolean}
 */
function containsDuplicate(nums) {
  // TODO: Implement Contains Duplicate using HashTable
  // 1. Create a new HashTable sized relative to the nums length.
  // 2. Loop through nums:
  //    a. For each number n, convert it to a string key.
  //    b. If the key already exists in the table, return true.
  //    c. Otherwise, add the key to the table.
  // 3. If loop ends with no duplicates found, return false.
}

export { containsDuplicate };
