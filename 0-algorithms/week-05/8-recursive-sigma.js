/*
Recursive Sigma (sum of all positive integers up to the given number)

Input: integer
Output: sum of integers from 1 to Input integer
*/

const num1 = 5;
const expected1 = 15;
// Explanation: (1 + 2 + 3 + 4 + 5)

const num2 = 2.5;
const expected2 = 3;
// Explanation: (1 + 2)

const num3 = -1;
const expected3 = 0;

/**
 * Recursively computes the sum of all positive integers from 1 up to the given number.
 * Decimal values are floored. Negative numbers return 0.
 * - Time Complexity: O(n), where n is the floored input value.
 * - Space Complexity: O(n) due to the recursive call stack.
 * @param {number} num - The input number to sum up to.
 * @returns {number} The resulting sum from 1 to num.
 */
function recursiveSigma(num) {
  // your code here
}
