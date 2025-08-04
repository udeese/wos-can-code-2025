/*
  Array: Binary Search (non recursive)

  Given a sorted array and a value, return whether the
  array contains that value.

  Do not iterate the array sequentially. Instead, use a
  divide-and-conquer strategy that takes advantage of the
  array's sorted order.

  Bonus (interview-style): First complete the standard
  version. If time permits, add a feature that returns
  how many times the given number appears.
*/

const numbers1 = [1, 3, 5, 6];
const searchNumber1 = 4;
const expected1 = false;

const numbers2 = [4, 5, 6, 8, 12];
const searchNumber2 = 5;
const expected2 = true;

const numbers3 = [3, 4, 6, 8, 12];
const searchNumber3 = 3;
const expected3 = true;

// bonus, how many times does the search num appear?
const numbers4 = [2, 2, 2, 2, 3, 4, 5, 6, 7, 8, 9];
const searchNumber4 = 2;
const expected4 = 4;

/**
 * Efficiently determines whether the given number exists
 * in the sorted array using binary search.
 * - Time: O(log n).
 * - Space: O(1).
 * @param {Array<number>} sortedNumbers
 * @param {number} searchNum
 * @returns {boolean} Whether the number exists in the array.
 */
function binarySearch(sortedNumbers, searchNum) {
  let left = 0;
  let right = sortedNumbers.length - 1;
  let count = 0;

  while (left <= right) {
    const mid = Math.floor((left + right) / 2);

    if (sortedNumbers[mid] === searchNum) {
      // Bonus: Count how many times searchNum appears
      count = 1;
      let i = mid - 1;
      while (i >= 0 && sortedNumbers[i] === searchNum) {
        count++;
        i--;
      }
      i = mid + 1;
      while (i < sortedNumbers.length && sortedNumbers[i] === searchNum) {
        count++;
        i++;
      }
      return { exists: true, count };
    } else if (sortedNumbers[mid] < searchNum) {
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }

  return { exists: false, count };
}

console.log('Result 1:', binarySearch(numbers1, searchNumber1));
console.log('Expected 1:', { exists: expected1, count: 0 });

console.log('Result 2:', binarySearch(numbers2, searchNumber2));
console.log('Expected 2:', { exists: expected2, count: 1 });

console.log('Result 3:', binarySearch(numbers3, searchNumber3));
console.log('Expected 3:', { exists: expected3, count: 1 });

console.log('Result 4:', binarySearch(numbers4, searchNumber4));
console.log('Expected 4:', { exists: true, count: 4 });
