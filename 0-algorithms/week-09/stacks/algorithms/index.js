import { NotImplementedError } from '../classes/not-implemented-error';
import { ArrayStack } from '../classes/array-stack';
import { LinkedListStack } from '../classes/list-stack';

/**
 * Reverses a string using a stack.
 * @param {string} str - The input string to reverse.
 * @returns {string} The reversed string.
 */
function reverseString(str) {
  const stack = new ArrayStack();
  for (let char of str) {
    stack.push(char);
  }
  let reversed = '';
  while (!stack.isEmpty()) {
    reversed += stack.pop();
  }
  return reversed;
}

/**
 * Checks if a string is a palindrome using a stack (case sensitive).
 * @param {string} str - The input string to check.
 * @returns {boolean} True if the string is a palindrome, false otherwise.
 */
function isPalindrome(str) {
  const stack = new ArrayStack();
  for (let char of str) {
    stack.push(char);
  }
  for (let i = 0; i < str.length; i++) {
    if (str[i] !== stack.pop()) {
      return false;
    }
  }
  return true;
}

/**
 * Checks whether a string has balanced parentheses using a stack.
 * Only `(` and `)` characters are considered; all others are ignored.
 * @param {string} str - The input string containing parentheses.
 * @returns {boolean} True if every opening parenthesis has a matching closing parenthesis
 * in the correct order, false otherwise.
 */
function parensValid(str) {
  const stack = new ArrayStack();
  for (const char of str) {
    if (char === '(') {
      stack.push(char);
    } else if (char === ')') {
      if (stack.isEmpty()) {
        return false;
      }
      stack.pop();
    }
  }
  return stack.isEmpty();
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
  const stack = new ArrayStack();
  const result = new Array(arr.length).fill(-1);

  for (let i = arr.length - 1; i >= 0; i--) {
    while (!stack.isEmpty() && stack.peek() <= arr[i]) {
      stack.pop();
    }
    if (!stack.isEmpty()) {
      result[i] = stack.peek();
    }
    stack.push(arr[i]);
  }

  return result;
}

export { reverseString, isPalindrome, parensValid, nextGreaterRight };
