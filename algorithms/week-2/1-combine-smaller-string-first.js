const smallerStringA1 = 'abcd';
const smallerStringB1 = 'efg';
const expected1 = 'efgabcd';

const smallerStringA2 = 'sunnyside up eggs';
const smallerStringB2 = 'biscuits and gravy';
const expected2 = 'sunnyside up eggsbiscuits and gravy';

/**
 * Combine two given strings together with the smaller string being added
 * in the front. If they are the same length, the first string will be
 * added to the front.
 * NOTE: How do we get the length of a string?
 *
 * @param {string} s1
 * @param {string} s2
 * @returns {string} The combined strings.
 */
function combineSmallerStringFirst(s1, s2) {
  // your code here
}

console.log(combineSmallerStringFirst(smallerStringA1, smallerStringB1));
console.log(combineSmallerStringFirst(smallerStringA2, smallerStringB2));

/************************************************************************************************/

const stringToRepeat1 = 'Birria Tacos';
const numberToRepeat1 = 5;
const repeatedExpected1 =
  'Birria TacosBirria TacosBirria TacosBirria TacosBirria Tacos';

const stringToRepeat2 = 'margherita pizza';
const numberToRepeat2 = 2;
const repeatedExpected2 = 'margherita pizzamargherita pizza';
