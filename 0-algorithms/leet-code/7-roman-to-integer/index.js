/**
 *
 * @param {string} s
 * @returns {number}
 */
function romanToInt(s) {
  // TODO: Implement one-pass parse with subtractive rule
  // 1) Define a map of Roman symbols to values
  // 2) Initialize total = 0
  // 3) Loop i from 0..s.length-1:
  //    a) curr = value of s[i]
  //    b) next = value of s[i+1] (or 0 if none)
  //    c) If curr < next, subtract curr from total; else add curr
  // 4) Return total
}

export { romanToInt };
