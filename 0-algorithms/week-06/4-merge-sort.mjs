import { merge } from './3-merge.mjs';

// mergeSort
const numbersOrdered = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const numbersRandomOrder = [9, 2, 5, 6, 4, 3, 7, 10, 1, 8];
const numbersReversed = [10, 9, 8, 7, 6, 5, 4, 3, 2, 1];
const expectedSort = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

/**
 * Creates a new sorted array based on the given numbers being recursively split
 * and merged.
 * Best: O(n log(n)) linearithmic.
 * Avg: O(n log(n)) linearithmic.
 * Worst: O(n log(n)) linearithmic.
 * @param {number[]} numbers
 * @returns {number[]} A new sorted array.
 */
function mergeSort(numbers) {
  if (numbers.length <= 1) {
    // Base case: arrays of length 0 or 1 are already sorted
    return numbers;
  }

  const middleIdx = Math.floor(numbers.length / 2);

  const left = numbers.slice(0, middleIdx);
  const right = numbers.slice(middleIdx);

  const sortedLeft = mergeSort(left);
  const sortedRight = mergeSort(right);

  return merge(sortedLeft, sortedRight);
}

// Tests:
console.log(
  'Ordered input:',
  mergeSort([...numbersOrdered]),
  'Expected:',
  expectedSort
);
console.log(
  'Random order input:',
  mergeSort([...numbersRandomOrder]),
  'Expected:',
  expectedSort
);
console.log(
  'Reversed input:',
  mergeSort([...numbersReversed]),
  'Expected:',
  expectedSort
);
