/**
 * Builds a frequency table of characters in a string.
 * Ignores spaces and treats characters case-insensitively.
 * - Time: O(n)
 * - Space: O(n)
 * @param {string} str
 * @returns {Object} A frequency map of characters.
 */
function buildCharFrequency(str) {
  const freq = {};

  for (let i = 0; i < str.length; i++) {
    const char = str[i].toLowerCase();
    if (char === ' ') continue;
    freq[char] = (freq[char] || 0) + 1;
  }

  return freq;
}

console.log(buildCharFrequency('hello world'));
// Expected: { h:1, e:1, l:3, o:2, w:1, r:1, d:1 }

console.log(buildCharFrequency('aabbcc'));
// Expected: { a:2, b:2, c:2 }

console.log(buildCharFrequency('Rail Safety'));
// Expected: { r:1, a:2, i:1, l:1, s:1, f:1, e:2, t:1, y:1 }

console.log(buildCharFrequency(''));
// Expected: {}

console.log(buildCharFrequency('    '));
// Expected: {}

export { buildCharFrequency };
