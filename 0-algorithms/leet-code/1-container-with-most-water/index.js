/**
 * Returns the maximum water area between two vertical lines.
 * @param {number[]} heights - non-negative integers
 * @returns {number}
 */
function maxArea(heights) {
  // TODO: Implement two-pointer approach
  // 1) Initialize left = 0, right = heights.length - 1, best = 0
  // 2) While left < right:
  //    a) width = right - left
  //    b) h = Math.min(heights[left], heights[right])
  //    c) best = Math.max(best, h * width)
  //    d) If heights[left] < heights[right], left++ else right--
  // 3) Return best
}

export { maxArea };
