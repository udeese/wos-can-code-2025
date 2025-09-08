class QueueNode {
  constructor(val) {
    this.value = val;
    this.next = null;
  }
}

/**
 * A queue data structure implemented using a singly-linked list.
 * Supports typical queue operations: enqueue, dequeue, peek, isEmpty, and size.
 */
class LinkedListQueue {
  /**
   * Creates a new empty LinkedListQueue.
   */
  constructor() {
    /** @type {QueueNode|null} */
    this.front = null;
    /** @type {QueueNode|null} */
    this.back = null;
    this._size = 0;
  }

  /**
   * Checks if the queue is empty.
   * @returns {boolean} True if the queue is empty, false otherwise.
   */
  isEmpty() {
    // TODO: Return true if the queue is empty, false otherwise.
    return this._size === 0;
  }

  /**
   * Adds a value to the rear of the queue.
   * @param {any} val - The value to enqueue.
   * @returns {LinkedListQueue} The queue instance for chaining.
   */
  enqueue(val) {
    // TODO: Add a value to the rear of the queue and return the queue instance.
    const queueNode = new QueueNode(val);

    if (this.isEmpty()) {
      this.front = queueNode;
      this.back = queueNode;
    } else if(this.back) {
      this.back.next = queueNode;
    } 

    this._size++;
    return this;
  }

  /**
   * Removes and returns the value at the front of the queue.
   * @returns {any} The value removed from the front of the queue.
   */
  dequeue() {
    // TODO: Remove and return the value at the front of the queue.
    const removeNode = this.front.value;

    this.front = this.front.next;

    this._size = Math.max(0, --this._size);
    console.log({removeNode});
    return removeNode;
  }

  /**
   * Returns the value at the front of the queue without removing it.
   * @returns {any} The value at the front of the queue.
   */
  peek() {
    // TODO: Return the value at the front of the queue without removing it.
    return this.front.value;
  }

  /**
   * Returns the number of elements in the queue.
   * @returns {number} The size of the queue.
   */
  size() {
    // TODO: Return the number of elements in the queue.
    return this._size;
  }
}

export { LinkedListQueue };
