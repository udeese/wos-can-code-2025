import { NotImplementedError } from './not-implemented-error.js';

/**
 * ArrayStack is a stack (LIFO: Last-In, First-Out) data structure backed by a JavaScript array.
 * The top of the stack is at the end of the array.
 */
class ArrayStack {
  /**
   * Creates a new, empty stack.
   */
  constructor() {
    this.items = [];
  }

  /**
   * Checks if the stack is empty.
   * @returns {boolean} True if the stack has no elements, false otherwise.
   */
  isEmpty() {
    return this.items.length === 0;
  }

  /**
   * Adds a value to the top of the stack.
   * @param {any} val - The value to push onto the stack.
   * @returns {ArrayStack} The stack instance (for chaining).
   */
  push(val) {
    this.items.push(val);
    return this;
  }

  /**
   * Removes and returns the value at the top of the stack.
   * @returns {any} The value removed from the top, or null if the stack is empty.
   */
  pop() {
    if (this.isEmpty()) return null;
    return this.items.pop();
  }

  /**
   * Returns the value at the top of the stack without removing it.
   * @returns {any} The value at the top, or null if the stack is empty.
   */
  peek() {
    if (this.isEmpty()) return null;
    return this.items[this.items.length - 1];
  }

  /**
   * Returns the number of elements in the stack.
   * @returns {number} The size of the stack.
   */
  size() {
    return this.items.length;
  }

  /**
   * Removes all elements from the stack.
   * @returns {ArrayStack} The stack instance (for chaining).
   */
  clear() {
    this.items.length = 0;
    return this;
  }

  /**
   * Returns an array of the stack's elements, with the top element first.
   * @returns {Array} An array representing the stack from top to bottom.
   */
  toArray() {
    return [...this.items].reverse();
  }

  /**
   * Prints the stack from top to bottom to the console.
   * Each element is printed on its own line.
   * @returns {ArrayStack} The stack instance (for chaining).
   */
  print() {
    const arr = this.toArray();
    for (let i = 0; i < arr.length; i++) {
      console.log(arr[i]);
    }
    return this;
  }
}

export { ArrayStack };
