/**
 * Returns the number of distinct ways to climb to the top of a staircase of n steps,
 * given you can climb 1 or 2 steps at a time.
 * Uses iterative dynamic programming (Fibonacci).
 * Time Complexity: O(n)
 * Space Complexity: O(1)
 * @param {number} n
 * @returns {number}
 */
function climbStairs(n) {
  if (n === 1) return 1;
  if (n === 2) return 2;

  let prev1 = 2;
  let prev2 = 1;

  for (let i = 3; i <= n; i++) {
    const current = prev1 + prev2;
    prev2 = prev1;
    prev1 = current;
  }

  return prev1;
}

/**
 * Recursive solution for climbing stairs.
 * Time Complexity: O(2^n) exponential due to repeated calculations
 * Space Complexity: O(n) due to recursion call stack depth
 * @param {number} n
 * @returns {number}
 */
function climbStairsRecursive(n) {
  // Base cases
  if (n === 1) return 1;
  if (n === 2) return 2;

  return climbStairsRecursive(n - 1) + climbStairsRecursive(n - 2);
}

/**
 * Recursive + memoization for climbing stairs.
 * Memoization improves time complexity by caching results of subproblems,
 * thus avoiding repeated calculations of the same values.
 * Time Complexity: O(n)
 * Space Complexity: O(n) due to memo storage and recursion call stack
 * @param {number} n
 * @param {Object} memo
 * @returns {number}
 */
function climbStairsRecursiveMemo(n, memo = {}) {
  if (n === 1) return 1;
  if (n === 2) return 2;

  if (memo[n]) return memo[n];

  memo[n] =
    climbStairsRecursiveMemo(n - 1, memo) +
    climbStairsRecursiveMemo(n - 2, memo);
  return memo[n];
}

export { climbStairs, climbStairsRecursive, climbStairsRecursiveMemo };
