/*
  Given a **sorted** array of integers, remove any duplicate values.

  Because the array is already sorted, all duplicates will be grouped together.

  You may use a new array.

  Bonus Challenges:
  - Solve it in O(n) time (no nested loops, new array is OK).
  - Solve it in-place (no new array).
  - Solve it in-place in O(n) time.
  - Solve it in O(n) time even if the input is NOT sorted.
*/

const nums1 = [1, 1, 1, 1];
const expected1 = [1];

const nums2 = [1, 1, 2, 2, 3, 3];
const expected2 = [1, 2, 3];

const nums3 = [1, 1, 2, 3, 3, 4];
const expected3 = [1, 2, 3, 4];

const nums4 = [1, 1];
const expected4 = [1];

/**
 * Removes duplicates from a sorted array of numbers.
 * Uses a new array.
 *
 * Time: O(n) - single pass through the array.
 * Space: O(n) - new array created to store unique values.
 *
 * @param {number[]} nums - A sorted array of integers.
 * @returns {number[]} A new array with duplicates removed.
 */
function dedupeSorted(nums) {
  if (nums.length === 0) return [];

  const deduped = [nums[0]];

  for (let i = 1; i < nums.length; i++) {
    if (nums[i] !== nums[i - 1]) {
      deduped.push(nums[i]);
    }
  }

  return deduped;
}

// Console tests
console.log(
  'Test 1:',
  JSON.stringify(dedupeSorted(nums1)) === JSON.stringify(expected1)
); // true
console.log(
  'Test 2:',
  JSON.stringify(dedupeSorted(nums2)) === JSON.stringify(expected2)
); // true
console.log(
  'Test 3:',
  JSON.stringify(dedupeSorted(nums3)) === JSON.stringify(expected3)
); // true
console.log(
  'Test 4:',
  JSON.stringify(dedupeSorted(nums4)) === JSON.stringify(expected4)
); // true
