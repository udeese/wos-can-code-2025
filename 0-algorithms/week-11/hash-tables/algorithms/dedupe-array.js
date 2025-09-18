import { HashTable } from '../hash-table';

/**
 * Deduplicates an array using the custom HashTable (separate chaining via array buckets).
 * Preserves the **first occurrence** order.
 *
 * Limitations: keys in this HashTable are strings; to support mixed primitive types
 * without collisions (e.g., 1 vs '1'), we prefix by typeof.
 *
 * @template T
 * @param {T[]} arr - Input array (prefer primitives for stable behavior).
 * @returns {T[]} A new array with duplicates removed in first-seen order.
 * @complexity O(n) average time, O(n) space
 */
function dedupeArray(arr) {
  // TODO: Implement dedupeArray using HashTable
  // 1. Create a new HashTable sized relative to the array length.
  // 2. Initialize an output array.
  // 3. Loop through each item in the input array:
  //    a. Build a key string that combines the item's type and value (to avoid collisions like 1 vs '1').
  //    b. If the key is not already in the table, set it in the table and push the item to the output array.
  // 4. Return the output array.
}

export { dedupeArray };
