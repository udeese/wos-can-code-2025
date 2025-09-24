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
    // TODO: Implement extractMin to remove and return the minimum element
    // 1. If the heap is empty (length <= 1), return undefined
    // 2. If there is only one real element (length === 2), pop and return it
    // 3. Otherwise:
    //    a. Store the root element (index 1) as the minimum
    //    b. Move the last element in the array to the root position
    //    c. Remove the last element from the array
    //    d. Call bubbleDown(1) to restore the heap property
    //    e. Return the stored minimum value
  }

  /**
   * Builds a min-heap from an arbitrary array (bottom-up heap construction).
   * Replaces the heap's internal array with the heapified contents.
   * @param {number[]} array
   * @returns {void}
   */
  heapify(array) {
    // TODO: Implement heapify using the bottom-up approach
    // 1. Initialize internal array with 1-based indexing:
    //    - Start with [null] followed by all items from the input array
    // 2. Determine n = number of real elements
    // 3. Loop from the last parent node (floor(n / 2)) down to 1:
    //    a. For each index i, call bubbleDown(i) to restore heap property
    // 4. After the loop, the entire array should satisfy the min-heap property
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
    // TODO: Implement bubbleDown to restore the min-heap property
    // 1. Determine n = number of real elements (this.data.length - 1)
    // 2. While true:
    //    a. Compute left child = index * 2
    //    b. Compute right child = left + 1
    //    c. Assume smallest = index
    //    d. If left is within bounds and value at left < value at smallest, update smallest = left
    //    e. If right is within bounds and value at right < value at smallest, update smallest = right
    //    f. If smallest did not change, break (heap property satisfied)
    //    g. Otherwise, swap value at index with value at smallest
    //    h. Update index = smallest and repeat
  }
}

export { MinHeap };
