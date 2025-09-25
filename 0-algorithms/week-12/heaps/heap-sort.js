import { MinHeap } from './min-heap.js';

/**
 * Heap Sort (simple) — uses the MinHeap class.
 * Builds a heap, then repeatedly extracts the minimum into a new array.
 * Does NOT mutate the input array.
 * @param {number[]} arr
 * @returns {number[]} a new sorted (ascending) array
 */
function heapSort(arr) {
  // TODO: Implement heapSort using a MinHeap
  // 1. Create a new MinHeap.
  // 2. Insert each element of the input array into the heap.
  // 3. Initialize an empty output array.
  // 4. While the heap is not empty:
  //    a. Extract the minimum from the heap.
  //    b. Append it to the output array.
  // 5. Return the output array.
}

/**
 * Heap Sort (in-place, bonus) — classic array-only implementation.
 * Uses a 0-based **max-heap** so swapping the root to the end yields ascending order.
 * Mutates the input array and also returns it.
 * @param {number[]} arr
 * @returns {number[]} the same array instance, sorted ascending
 */
function heapSortInPlace(arr) {
  // TODO: Implement heapSortInPlace using an in-place max-heap
  // 1. Build a max-heap from the array (start from last parent down to index 0).
  // 2. For end = last index down to 1:
  //    a. Swap the root (max) with arr[end].
  //    b. Reduce the heap size by 1.
  //    c. Call siftDown on the root to restore the heap property.
  // 3. Return the sorted array.
}

/**
 * Sifts the node at `i` down the heap until the max-heap property is restored.
 * Operates on the subarray arr[0..heapSize-1].
 * @param {number[]} arr
 * @param {number} i
 * @param {number} heapSize
 */
function siftDown(arr, i, heapSize) {
  // TODO: Implement siftDown for max-heap
  // 1. While true:
  //    a. Compute left child index = 2 * i + 1.
  //    b. Compute right child index = 2 * i + 2.
  //    c. Set largest = i.
  //    d. If left is within heapSize and arr[left] > arr[largest], update largest = left.
  //    e. If right is within heapSize and arr[right] > arr[largest], update largest = right.
  //    f. If largest did not change, break (heap property satisfied).
  //    g. Otherwise, swap arr[i] and arr[largest].
  //    h. Set i = largest and continue.
}

export { heapSort, heapSortInPlace };
