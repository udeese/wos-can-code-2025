import { HashTable } from '../hash-table';

/**
 * Finds the **first non-repeating character** in a string using the custom HashTable.
 * By default, counts are **case-insensitive** and **ignore whitespace**. You can
 * override both via the options parameter.
 *
 * Note: The returned character is the **normalized** character (after applying options),
 * which keeps the behavior predictable for case-insensitive searches.
 *
 * @param {string} str - Input string
 * @param {{ ignoreWhitespace?: boolean, caseInsensitive?: boolean }} [options]
 * @returns {string|null} The first non-repeating (normalized) character, or null if none exists
 * @complexity O(n) average time, O(k) space where k is number of distinct characters
 */
function firstNonRepeatingChar(
  str,
  { ignoreWhitespace = true, caseInsensitive = true } = {}
) {
  // TODO: Implement firstNonRepeatingChar using HashTable
  // 1. Create a new HashTable sized relative to the string length.
  // 2. First pass: loop through characters in the string
  //    a. Apply options: lowercase if caseInsensitive, skip if ignoreWhitespace and it's whitespace.
  //    b. Count frequency by inserting/updating counts in the HashTable.
  // 3. Second pass: loop through characters again
  //    a. Apply the same normalization rules.
  //    b. Return the first character whose count in the table is 1.
  // 4. If none found, return null.
  const table = new HashTable(Math.floor(str.length / 2) || 1);

  for (let char of str) {
    if (caseInsensitive) char = char.toLowerCase();
    if (ignoreWhitespace && /\s/.test(char)) continue;

    const count = table.get(char) || 0;
    table.set(char, count + 1);
  }

  for (let char of str) {
    if (caseInsensitive) char = char.toLowerCase();
    if (ignoreWhitespace && /\s/.test(char)) continue;

    if (table.get(char) === 1) return char;
  }

  return null;
}

export { firstNonRepeatingChar };
