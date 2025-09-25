/**
 * MinHeap implementation (array-backed).
 */
class MinHeap {
  /**
   * Creates a new empty MinHeap.
   */
  constructor() {
    /** @type {number[]} */
    this.data = [null];
  }

  /**
   * Returns the minimum element without removing it.
   * @returns {number|undefined} The smallest element or undefined if empty.
   */
  peek() {
    return this.data.length > 1 ? this.data[1] : undefined;
  }

  /**
   * Inserts a new value into the heap and maintains the heap property.
   * @param {number} value
   * @returns {void}
   */
  insert(value) {
    this.data.push(value);
    this.#bubbleUp(this.data.length - 1);
  }

  /**
   * Removes and returns the minimum element (root) while maintaining heap property.
   * @returns {number|undefined} The smallest element, or undefined if the heap is empty.
   */
  extractMin() {
    if (this.data.length <= 1) return undefined; // empty
    if (this.data.length === 2) {
      // only one real element at index 1
      return this.data.pop();
    }
    const min = this.data[1];
    // Move last element to root and bubble down
    this.data[1] = this.data.pop();
    this.#bubbleDown(1);
    return min;
  }

  /**
   * Builds a min-heap from an arbitrary array (bottom-up heap construction).
   * Replaces the heap's internal array with the heapified contents.
   * @param {number[]} array
   * @returns {void}
   */
  heapify(array) {
    // Initialize internal array with 1-based indexing
    this.data = [null, ...array];
    const n = this.data.length - 1;
    // Start from the last parent and bubble down
    for (let i = Math.floor(n / 2); i >= 1; i--) {
      this.#bubbleDown(i);
    }
  }

  /**
   * Convenience: create a MinHeap from an array in O(n) time.
   * @param {number[]} array
   * @returns {MinHeap}
   */
  static from(array) {
    const h = new MinHeap();
    h.heapify(array);
    return h;
  }

  /**
   * Moves the element at the given index up until the heap property is restored.
   * @param {number} index
   * @private
   */
  #bubbleUp(index) {
    while (index > 1) {
      const parentIndex = Math.floor(index / 2);
      if (this.data[parentIndex] <= this.data[index]) break;
      // swap
      [this.data[parentIndex], this.data[index]] = [
        this.data[index],
        this.data[parentIndex],
      ];
      index = parentIndex;
    }
  }

  /**
   * Moves the element at the given index down until the heap property is restored.
   * @param {number} index
   * @private
   */
  #bubbleDown(index) {
    const n = this.data.length - 1; // number of real elements
    while (true) {
      const left = index * 2;
      const right = left + 1;
      let smallest = index;

      if (left <= n && this.data[left] < this.data[smallest]) smallest = left;
      if (right <= n && this.data[right] < this.data[smallest])
        smallest = right;

      if (smallest === index) break;

      [this.data[index], this.data[smallest]] = [
        this.data[smallest],
        this.data[index],
      ];
      index = smallest;
    }
  }
}

export { MinHeap };
