/*
  Braces Valid

  Given a string that may contain parentheses `()`,
  square brackets `[]`, and curly braces `{}`, determine
  whether all of these characters are properly matched
  and correctly nested.

  A string is considered valid if:
  - Every opening symbol has a corresponding closing
    symbol of the same type.
  - Symbols are closed in the correct order (e.g., no
    closing bracket before its matching opening bracket).
  - Different types of braces must properly nest (e.g.,
    "{[()]}" is valid, but "{[(])}" is not).
*/

const strA = 'W(a{t}s[o(n{ c}o)m]e )h[e{r}e]!'; // ( {} [ ({}) ] ) [{}]
const expectedA = true;

const strB = 'D(i{a}l[ t]o)n{e'; // ({} []) {
const expectedB = false;

const strC = 'A(1)s[O (n]0{t) 0}k'; // () [(] {) }
const expectedC = false;

/**
 * Determines whether the string's braces, brackets, and parentheses are valid
 * based on the order and amount of opening and closing pairs.

 * @param {string} str
 * @returns {boolean} Whether the given strings braces are valid.
 */
function bracesValid(str) {
  //Your code here
}

console.log(`${bracesValid(strA)} should equal ${expectedA}`);
console.log(`${bracesValid(strB)} should equal ${expectedB}`);
console.log(`${bracesValid(strC)} should equal ${expectedC}`);
