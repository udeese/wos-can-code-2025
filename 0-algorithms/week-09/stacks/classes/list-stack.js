/**
 * Node used internally by LinkedListStack to store values.
 */
class StackNode {
  /**
   * @param {any} value - The value to store in the stack node.
   */
  constructor(value) {
    this.value = value;
    /** @type {StackNode|null} */
    this.next = null;
  }
}

/**
 * Stack implementation using a singly linked list.
 * Top of stack is the head node for O(1) push/pop/peek.
 */
class LinkedListStack {
  constructor() {
    /** @type {StackNode|null} */
    this.head = null;
    /** @type {number} */
    this._size = 0;
  }

  /**
   * Checks whether the stack is empty.
   * @returns {boolean} True if stack has no elements, false otherwise.
   */
  isEmpty() {
    throw NotImplementedError('Method stub only');
  }

  /**
   * Pushes a value onto the top of the stack.
   * @param {*} val - The value to push.
   * @returns {LinkedListStack} The stack instance for chaining.
   */
  push(val) {
    throw NotImplementedError('Method stub only');
  }

  /**
   * Removes and returns the value at the top of the stack.
   * @returns {*|null} The popped value, or null if stack is empty.
   */
  pop() {
    throw NotImplementedError('Method stub only');
  }

  /**
   * Returns the value at the top of the stack without removing it.
   * @returns {*|null} The value at the top, or null if stack is empty.
   */
  peek() {
    throw NotImplementedError('Method stub only');
  }

  /**
   * Returns the number of elements in the stack.
   * @returns {number} The size of the stack.
   */
  size() {
    throw NotImplementedError('Method stub only');
  }

  /**
   * Removes all elements from the stack.
   * @returns {LinkedListStack} The stack instance for chaining.
   */
  clear() {
    throw NotImplementedError('Method stub only');
  }

  /**
   * Converts the stack into an array (top element is first).
   * @returns {Array<*>} An array representation of the stack.
   */
  toArray() {
    throw NotImplementedError('Method stub only');
  }

  /**
   * Prints the stack contents to the console (top to bottom).
   * @returns {LinkedListStack} The stack instance for chaining.
   */
  print() {
    throw NotImplementedError('Method stub only');
  }
}

export { LinkedListStack };
