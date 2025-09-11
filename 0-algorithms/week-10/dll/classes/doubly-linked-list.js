/**
 * Represents a node in a doubly linked list.
 * @class
 */
class DLLNode {
  /**
   * Creates a DLLNode.
   * @param {*} val - The value to store in the node.
   */
  constructor(val) {
    /** @type {*} */
    this.value = val;
    /** @type {DLLNode|null} */
    this.prev = null;
    /** @type {DLLNode|null} */
    this.next = null;
  }
}

/**
 * Doubly Linked List implementation.
 * @class
 */
class DoublyLinkedList {
  /**
   * Creates an empty doubly linked list.
   */
  constructor() {
    /** @type {DLLNode|null} */
    this.head = null;
    /** @type {DLLNode|null} */
    this.tail = null;
    /** @type {number} */
    this.length = 0;
  }

  /**
   * Checks if the list is empty.
   * @returns {boolean} True if the list has no elements; otherwise, false.
   * @complexity O(1)
   */
  isEmpty() {
    return this.length === 0;
  }

  /**
   * Returns the number of elements in the list.
   * @returns {number} The size of the list.
   * @complexity O(1)
   */
  size() {
    return this.length;
  }

  /**
   * Inserts a new node with the given value at the head of the list.
   * @param {*} val - The value to insert.
   * @returns {void}
   * @complexity O(1)
   */
  insertAtHead(val) {
    const newNode = new DLLNode(val);
    if (this.isEmpty()) {
      this.head = this.tail = newNode;
    } else {
      newNode.next = this.head;
      this.head.prev = newNode;
      this.head = newNode;
    }
    this.length++;
  }

  /**
   * Inserts a new node with the given value at the tail of the list.
   * @param {*} val - The value to insert.
   * @returns {void}
   * @complexity O(1)
   */
  insertAtTail(val) {
    const newNode = new DLLNode(val);
    if (this.isEmpty()) {
      this.head = this.tail = newNode;
    } else {
      newNode.prev = this.tail;
      this.tail.next = newNode;
      this.tail = newNode;
    }
    this.length++;
  }

  /**
   * Removes and returns the value at the head of the list.
   * @returns {*} The value removed, or null if the list is empty.
   * @complexity O(1)
   */
  removeHead() {
    if (this.isEmpty()) return null;
    const removedValue = this.head.value;
    if (this.head === this.tail) {
      this.head = this.tail = null;
    } else {
      this.head = this.head.next;
      this.head.prev = null;
    }
    this.length--;
    return removedValue;
  }

  /**
   * Removes and returns the value at the tail of the list.
   * @returns {*} The value removed, or null if the list is empty.
   * @complexity O(1)
   */
  removeTail() {
    if (this.isEmpty()) return null;
    const removedValue = this.tail.value;
    if (this.head === this.tail) {
      this.head = this.tail = null;
    } else {
      this.tail = this.tail.prev;
      this.tail.next = null;
    }
    this.length--;
    return removedValue;
  }

  /**
   * Finds the first node with the specified value.
   * @param {*} val - The value to search for.
   * @returns {DLLNode|null} The found node, or null if not found.
   * @complexity O(n)
   */
  find(val) {
    let current = this.head;
    while (current) {
      if (current.value === val) {
        return current;
      }
      current = current.next;
    }
    return null;
  }

  /**
   * Inserts a new node with the given value before the specified node.
   * @param {DLLNode} node - The node before which to insert.
   * @param {any} val - The value to insert.
   * @returns {void}
   * @complexity O(1)
   */
  insertBefore(node, val) {
    // TODO:
    // 1. Check if the node is null or undefined; if so, do nothing.
    // 2. If the node is the head of the list, create a new node and update head accordingly.
    // 3. Otherwise, create a new node and properly link it between node.prev and node.
    throw new Error('Not implemented');
  }

  /**
   * Inserts a new node with the given value after the specified node.
   * @param {DLLNode} node - The node after which to insert.
   * @param {any} val - The value to insert.
   * @returns {void}
   * @complexity O(1)
   */
  insertAfter(node, val) {
    // TODO:
    // 1. Check if the node is null or undefined; if so, do nothing.
    // 2. If the node is the tail of the list, create a new node and update tail accordingly.
    // 3. Otherwise, create a new node and properly link it between node and node.next.
    throw new Error('Not implemented');
  }

  /**
   * Converts the list to an array of values.
   * @returns {Array<*>} An array containing all values in the list.
   * @complexity O(n)
   */
  toArray() {
    const arr = [];
    let current = this.head;
    while (current) {
      arr.push(current.value);
      current = current.next;
    }
    return arr;
  }
}

export { DoublyLinkedList };
