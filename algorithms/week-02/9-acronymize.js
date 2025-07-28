/*
  Acronyms

  Create a function that, given a string, returns the string’s acronym
  (first letter of each word capitalized).

  Do it with .split first if you need to, then try to do it without
*/

const strA = 'object oriented programming';
const expectedA = 'OOP';

// The 4 pillars of OOP
const strB = 'abstraction polymorphism inheritance encapsulation';
const expectedB = 'APIE';

const strC = 'software development life cycle';
const expectedC = 'SDLC';

// Bonus: ignore extra spaces
const strD = '  global   information tracker    ';
const expectedD = 'GIT';

/**
 * Turns the given str into an acronym.
 * - Time: O(?).
 * - Space: O(?).
 * @param {string} wordsStr A string to be turned into an acronym.
 * @returns {string} The acronym.
 */
function acronymize(wordsStr) {
  //your code here
}

// tests:
console.log(`"${strA}" -> "${titleCase(strA)}" (Expected: "${expectedA}")`);
console.log(`"${strB}" -> "${titleCase(strB)}" (Expected: "${expectedB}")`);
console.log(`"${strC}" -> "${titleCase(strC)}" (Expected: "${expectedC}")`);
console.log(`"${strD}" -> "${titleCase(strD)}" (Expected: "${expectedD}")`);
