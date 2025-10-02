/**
 * Searches target in a rotated sorted array with no duplicates.
 * Binary search variant that picks the sorted half each step.
 * @param {number[]} nums
 * @param {number} target
 * @returns {number} Index of target or -1 if not found.
 */
function searchInRotatedSortedArray(nums, target) {
  // TODO: Implement binary search in a rotated sorted array
  // 1. Initialize left = 0 and right = nums.length - 1
  // 2. While left <= right:
  //    a. Compute mid = floor((left + right) / 2)
  //    b. If nums[mid] === target, return mid
  //    c. If the left half is sorted (nums[left] <= nums[mid]):
  //         - If target lies within nums[left] and nums[mid], move right = mid - 1
  //         - Else move left = mid + 1
  //       Else (the right half is sorted):
  //         - If target lies within nums[mid] and nums[right], move left = mid + 1
  //         - Else move right = mid - 1
  // 3. If loop ends, return -1 (target not found)
}

export { searchInRotatedSortedArray };
