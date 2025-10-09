/**
 * Converts an integer to a Roman numeral.
 *
 * Time: O(1)
 * Space: O(1)
 *
 * @param {number} num - Integer between 1 and 3999.
 * @returns {string} Roman numeral string.
 */
function intToRoman(num) {
  // TODO: Convert integer to Roman numeral
  // 1. Create two parallel arrays of Roman symbols and their numeric values, ordered from largest to smallest.
  // 2. Start with an empty result string.
  // 3. While the number is greater than zero:
  //   - Find the largest value less than or equal to the number.
  //   - Append its symbol to the result.
  //   - Subtract that value from the number.
  // 4. Return the result string.
}

export { intToRoman };
