/**
 * Finds the length of the longest substring without repeating characters.
 *
 * This uses a sliding window approach with a hash map that tracks the last
 * seen index of each character. When a duplicate character is encountered
 * within the current window, the left pointer jumps past the previous index
 * of that character.
 *
 * @param {string} s - The input string.
 * @returns {number} The length of the longest substring of `s` that contains no repeating characters.
 *
 * Note: This is the classic "Longest Substring Without Repeating Characters"
 * problem (LeetCode #3). It is different from "Minimum Window Substring."
 *
 * @see https://leetcode.com/problems/longest-substring-without-repeating-characters/
 */
function lengthOfLongestSubstring(s) {
  let best = 0;
  let left = 0;
  const seen = new Map();

  for (let right = 0; right < s.length; right++) {
    const ch = s[right];
    if (seen.has(ch) && seen.get(ch) >= left) {
      left = seen.get(ch) + 1;
    }
    seen.set(ch, right);
    const windowLen = right - left + 1;
    if (windowLen > best) best = windowLen;
  }

  return best;
}

export { lengthOfLongestSubstring };
