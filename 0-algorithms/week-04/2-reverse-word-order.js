/*
  Reverse Word Order

  Given a string of words (with spaces)
  return a new string with words in reverse sequence.
  .trim is okay with this one.
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
  let trimmed = wordsStr.trim();
  let result = '';
  let word = '';
  const words = [];

  for (let i = 0; i <= trimmed.length; i++) {
    const char = trimmed[i];

    if (char === ' ' || i === trimmed.length) {
      if (word.length > 0) {
        words.push(word);
        word = '';
      }
    } else {
      word += char;
    }
  }

  for (let i = words.length - 1; i >= 0; i--) {
    result += words[i];
    if (i !== 0) result += ' ';
  }

  return result;
}

console.log(`${reverseWordOrder(strA)} should equal ${expectedA}`);
console.log(`${reverseWordOrder(strB)} should equal ${expectedB}`);
console.log(`${reverseWordOrder(strC)} should equal ${expectedC}`);
