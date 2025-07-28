/*
  Reverse Word Order

  Given a string of words (with spaces)
  return a new string with words in reverse sequence.
*/

const strA = 'This is a test';
const expectedA = 'test a is This';

const strB = 'hello';
const expectedB = 'hello';

const strC = '   This  is a   test  ';
const expectedC = 'test a is This';

/**
 * Reverses the order of the words but not the words themselves form the given
 * string of space separated words.
 * - Time: O(?).
 * - Space: O(?).
 * @param {string} wordsStr A string containing space separated words.
 * @returns {string} The given string with the word order reversed but the words
 *    themselves are not reversed.
 */
function reverseWordOrder(wordsStr) {
  // your code here
}

console.log(`${reverseWordOrder(strA)} should equal ${expectedA}`);
console.log(`${reverseWordOrder(strB)} should equal ${expectedB}`);
console.log(`${reverseWordOrder(strC)} should equal ${expectedC}`);
