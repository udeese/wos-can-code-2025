import { NotImplementedError } from '../classes/not-implemented-error';
import { ArrayStack } from '../classes/array-stack';
import { LinkedListStack } from '../classes/list-stack';

/**
 * Reverses a string using a stack.
 * @param {string} str - The input string to reverse.
 * @returns {string} The reversed string.
 */
function reverseString(str) {
  throw NotImplementedError('Method stub only');
}

/**
 * Checks if a string is a palindrome using a stack (case sensitive).
 * @param {string} str - The input string to check.
 * @returns {boolean} True if the string is a palindrome, false otherwise.
 */
function isPalindrome(str) {
  throw NotImplementedError('Method stub only');
}

/**
 * Checks whether a string has balanced parentheses using a stack.
 * Only `(` and `)` characters are considered; all others are ignored.
 * @param {string} str - The input string containing parentheses.
 * @returns {boolean} True if every opening parenthesis has a matching closing parenthesis
 * in the correct order, false otherwise.
 */
function parensValid(str) {
  throw NotImplementedError('Method stub only');
}

/**
 * Finds the next greater element to the right for each element in the array.
 * For each element, the function returns the first greater element to its right;
 * if none exists, -1 is returned for that element.
 * @param {number[]} arr - The input array of numbers.
 * @returns {number[]} An array where each element is the next greater element to
 * the right of the corresponding input element.
 */
function nextGreaterRight(arr) {
  throw NotImplementedError('Method stub only');
}

export { reverseString, isPalindrome, parensValid, nextGreaterRight };
