/**
 * String Encode
 *
 * Given a string that may contain sequences of consecutive characters,
 * return a shortened string by including the character, then the
 * number of times it appears.
 *
 * If final result is not shorter (such as "bb" => "b2" ),
 * return the original string.
 */

const str1 = 'aaaabbcddd';
const expected1 = 'a4b2c1d3';

const str2 = '';
const expected2 = '';

const str3 = 'a';
const expected3 = 'a';

const str4 = 'bbcc';
const expected4 = 'bbcc';

/**
 * Encodes the given string such that duplicate characters appear once followed
 * by a number representing how many times the char occurs. Only encode strings
 * when the result yields a shorter length.
 * - Time: O(?).
 * - Space: O(?).
 * @param {string} str The string to encode.
 * @returns {string} The given string encoded.
 */
function stringEncode(str) {
  // your code here
}

console.log(`${stringEncode(str1)} should equal ${expected1}`);
console.log(`${stringEncode(str2)} should equal ${expected2}`);
console.log(`${stringEncode(str3)} should equal ${expected3}`);
console.log(`${stringEncode(str4)} should equal ${expected4}`);
