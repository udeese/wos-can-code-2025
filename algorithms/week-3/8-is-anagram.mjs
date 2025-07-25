import { buildCharFrequency } from './7-build-char-frequency.mjs';

/**
 * Determines whether two strings are anagrams of each other without using built-in split/sort/join.
 * - Time: O(n)
 * - Space: O(n)
 * @param {string} s1
 * @param {string} s2
 * @returns {boolean}
 */
function isAnagram(s1, s2) {
  const freq1 = buildCharFrequency(s1);
  const freq2 = buildCharFrequency(s2);

  for (const char in freq1) {
    if (freq1[char] !== freq2[char]) return false;
  }

  for (const char in freq2) {
    if (!(char in freq1)) return false;
  }

  return true;
}

console.log(isAnagram('listen', 'silent'), '=> true');
console.log(isAnagram('hello', 'world'), '=> false');
console.log(isAnagram('rail safety', 'fairy tales'), '=> true');
console.log(isAnagram('aabbcc', 'baccab'), '=> true');
