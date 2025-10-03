/**
 * Searches target in a rotated sorted array with no duplicates.
 * Binary search variant that picks the sorted half each step.
 * @param {number[]} nums
 * @param {number} target
 * @returns {number} Index of target or -1 if not found.
 */
function searchInRotatedSortedArray(nums, target) {
  let left = 0;
  let right = nums.length - 1;

  while (left <= right) {
    const mid = Math.floor((left + right) / 2);
    if (nums[mid] === target) return mid;

    // Left half is sorted
    if (nums[left] <= nums[mid]) {
      if (nums[left] <= target && target < nums[mid]) {
        right = mid - 1;
      } else {
        left = mid + 1;
      }
    } else {
      // Right half is sorted
      if (nums[mid] < target && target <= nums[right]) {
        left = mid + 1;
      } else {
        right = mid - 1;
      }
    }
  }

  return -1;
}

export { searchInRotatedSortedArray };
