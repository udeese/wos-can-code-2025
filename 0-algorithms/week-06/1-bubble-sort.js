/*
  Visualization: https://www.hackerearth.com/practice/algorithms/sorting/bubble-sort/visualize/

  Bubble Sort is a stable, in-place sorting algorithm.

  Task:
    Create a function that uses Bubble Sort to sort an unsorted array in place.
    For each pass, compare every pair of adjacent elements and swap them if
    the left element is greater than the right. Repeat until the array is sorted.
*/

const numbersOrdered = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const numbersRandomOrder = [9, 2, 5, 6, 4, 3, 7, 10, 1, 8];
const numbersReversed = [10, 9, 8, 7, 6, 5, 4, 3, 2, 1];
const expected = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

/*
  
*/
/**
 * Sorts the given array of numbers in place using Bubble Sort.
 *
 * Complexity:
 *  - Best case: O(n^2) — no early exit; still loops through all passes even if sorted.
 *  - Average case: O(n^2)
 *  - Worst case: O(n^2)
 *  - Space: O(1) — in-place sort.
 *
 * @param {number[]} numbers - The array of numbers to sort.
 * @returns {number[]} The sorted array (same reference as the input).
 */
function bubbleSort(numbers) {
  for (let i = 0; i < numbers.length; i++) {
    for (let j = 0; j < numbers.length - 1 - i; j++) {
      if (numbers[j] > numbers[j + 1]) {
        [numbers[j], numbers[j + 1]] = [numbers[j + 1], numbers[j]];
      }
    }
  }
  return numbers;
}

/**
 * Sorts the given array of numbers in place using Bubble Sort.
 *
 * Complexity:
 *  - Best case: O(n) — stops early if array is already sorted.
 *  - Average case: O(n^2)
 *  - Worst case: O(n^2)
 *  - Space: O(1) — in-place sort.
 *
 * This version improves performance by stopping early if no swaps occur during
 * a pass, indicating that the array is already sorted. This avoids unnecessary
 * passes through the array.
 *
 * @param {number[]} numbers - The array of numbers to sort.
 * @returns {number[]} The sorted array (same reference as the input).
 */
function bubbleSortEarlyExit(numbers) {
  for (let i = 0; i < numbers.length; i++) {
    let swapped = false;
    for (let j = 0; j < numbers.length - 1 - i; j++) {
      if (numbers[j] > numbers[j + 1]) {
        swapped = true;
        [numbers[j], numbers[j + 1]] = [numbers[j + 1], numbers[j]];
      }
    }
    if (!swapped) break;
  }
  return numbers;
}

/*
 */
/**
 * Sorts the given array of numbers in place using Bubble Sort.
 * Mutates the original array.
 * Complexity:
 *  - Best case: O(n) — stops early if array is already sorted.
 *  - Average case: O(n^2)
 *  - Worst case: O(n^2)
 *  - Space: O(1) — in-place sort.
 *  - Note: Can perform fewer comparisons than the early-exit version when the array is nearly sorted.
 *
 * This version improves on the early exit approach by tracking the last
 * position where a swap occurred. By doing so, it reduces the number of
 * comparisons in the next pass, making it more efficient especially
 * when the tail end of the array is already sorted.
 *
 * @param {number[]} numbers - The array of numbers to sort.
 * @returns {number[]} The sorted array (same reference as the input).
 */
function bubbleSortWithCap(numbers) {
  let n = numbers.length;
  while (n > 1) {
    let lastSwap = 0;
    for (let i = 0; i < n - 1; i++) {
      if (numbers[i] > numbers[i + 1]) {
        [numbers[i], numbers[i + 1]] = [numbers[i + 1], numbers[i]];
        lastSwap = i + 1;
      }
    }
    if (lastSwap === 0) break;
    n = lastSwap;
  }
  return numbers;
}

console.log(
  'Ordered input:',
  bubbleSort([...numbersOrdered]),
  'Expected:',
  expected
);
console.log(
  'Random order input:',
  bubbleSort([...numbersRandomOrder]),
  'Expected:',
  expected
);
console.log(
  'Reversed input:',
  bubbleSort([...numbersReversed]),
  'Expected:',
  expected
);
