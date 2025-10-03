/**
 * Returns the number of distinct ways to climb to the top of a staircase of n steps,
 * given you can climb 1 or 2 steps at a time.
 * @param {number} n
 * @returns {number}
 */
function climbStairs(n) {
  // TODO: Implement DP solution (iterative)
  // 1) Handle base cases for n=1 and n=2
  // 2) Initialize two variables for previous two results
  // 3) Loop from 3 to n:
  //    - Compute current = prev1 + prev2
  //    - Shift prev variables
  // 4) Return the result
}

export { climbStairs };
