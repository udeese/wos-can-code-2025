import { HashTable } from '../hash-table.js';

/**
 * Contains Duplicate — returns true if any value appears at least twice.
 * Uses the custom HashTable for O(n) average time membership checks.
 *
 * @param {number[]} nums
 * @returns {boolean}
 */
function containsDuplicate(nums) {
  const table = new HashTable(Math.max(16, nums.length * 2));
  for (const n of nums) {
    const key = String(n);
    if (table.has(key)) return true;
    table.set(key, true);
  }
  return false;
}

export { containsDuplicate };
