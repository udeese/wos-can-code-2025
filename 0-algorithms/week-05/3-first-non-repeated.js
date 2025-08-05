/*
  Given an array of integers, return the first integer that appears only once.

  If multiple integers are non-repeated, return the one that appears first.

  If there are no non-repeated integers, return null.
*/

const numsA = [3, 5, 4, 3, 4, 6, 5];
const expectedA = 6;

const numsB = [3, 5, 5];
const expectedB = 3;

const numsC = [3, 3, 5];
const expectedC = 5;

const numsD = [5];
const expectedD = 5;

const numsE = [];
const expectedE = null;

const numsF = [3, 5, 4, 3, 6, 5];
const expectedF = 4;

/**
 * Returns the first non-repeated integer in the array.
 * Time: O(n)
 * Space: O(n)
 * @param {number[]} nums
 * @returns {number|null}
 */
function firstNonRepeated(nums) {
  const freq = {};

  for (const num of nums) {
    freq[num] = (freq[num] || 0) + 1;
  }

  for (const num of nums) {
    if (freq[num] === 1) return num;
  }

  return null;
}

console.log('Test A:', firstNonRepeated(numsA) === expectedA);
console.log('Test B:', firstNonRepeated(numsB) === expectedB);
console.log('Test C:', firstNonRepeated(numsC) === expectedC);
console.log('Test D:', firstNonRepeated(numsD) === expectedD);
console.log('Test E:', firstNonRepeated(numsE) === expectedE);
console.log('Test F:', firstNonRepeated(numsF) === expectedF);
