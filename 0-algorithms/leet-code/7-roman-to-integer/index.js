const ROMAN = { I: 1, V: 5, X: 10, L: 50, C: 100, D: 500, M: 1000 };

/**
 *
 * @param {string} s
 * @returns {number}
 */
function romanToInt(s) {
  let total = 0;
  let prev = 0;

  for (let i = s.length - 1; i >= 0; i--) {
    const curr = ROMAN[s[i]];
    if (curr < prev) total -= curr;
    else {
      total += curr;
      prev = curr;
    }
  }
  return total;
}

export { romanToInt };
