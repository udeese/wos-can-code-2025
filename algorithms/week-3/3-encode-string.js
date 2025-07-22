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
  let decoded = '';
  let i = 0;

  while (i < str.length) {
    // Retrieve letter at current index then increment the idx (post increment)
    // to get to the num that comes after the char.
    let char = str[i++];
    // the num is a string so multiple digits need to be concatenated before
    // converted to a number. '1' + '1' => '11'. 1 + 1 => 2
    let numStr = '';
    /*
    parseInt returns NaN if it fails to parse. NaN is a weird special value
    that requires using isNaN to check b/c NaN === NaN => false.
    */
    let isNumber = isNaN(parseInt(str[i])) === false;

    /*
    Iterate over all the nums that come after this string until the next
    non-number.
    */
    while (i < str.length && isNumber) {
      // concatenate the string-num digit then increment.
      numStr += str[i++];
      isNumber = isNaN(parseInt(str[i])) === false;
    }

    // .repeat will automatically convert numStr to a number if it can.
    decoded += char.repeat(numStr);
  }
  return decoded;
}

console.log(`${stringEncode(str1)} should equal ${expected1}`);
console.log(`${stringEncode(str2)} should equal ${expected2}`);
console.log(`${stringEncode(str3)} should equal ${expected3}`);
console.log(`${stringEncode(str4)} should equal ${expected4}`);
