/**
 * Returns the maximum water area between two vertical lines.
 * @param {number[]} heights - non-negative integers
 * @returns {number}
 */
function maxArea(heights) {
  let left = 0;
  let right = heights.length - 1;
  let best = 0;

  while (left < right) {
    const width = right - left;
    const h = Math.min(heights[left], heights[right]);
    best = Math.max(best, h * width);

    if (heights[left] < heights[right]) {
      left++;
    } else {
      right--;
    }
  }

  return best;
}

export { maxArea };
