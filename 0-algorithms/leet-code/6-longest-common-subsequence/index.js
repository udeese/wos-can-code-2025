/**
 * Returns the length of the Longest Common Subsequence (LCS) of two strings.
 * Bottom-up dynamic programming over prefixes.
 *
 * Time: O(m*n)
 * Space: O(m*n) — can be reduced to O(min(m, n)) with a rolling row.
 *
 * @param {string} text1
 * @param {string} text2
 * @returns {number}
 */
function longestCommonSubsequence(text1, text2) {
  let m = text1.length;
  let n = text2.length;
  if (m === 0 || n === 0) return 0;

  const dp = Array.from({ length: m + 1 }, () => Array(n + 1).fill(0));
  for (let i = 1; i <= m; i++) {
    for (let j = 1; j <= n; j++) {
      if (text1[i - 1] === text2[j - 1]) {
        dp[i][j] = dp[i - 1][j - 1] + 1;
      } else {
        dp[i][j] = Math.max(dp[i - 1][j], dp[i][j - 1]);
      }
    }
  }

  return dp[m][n];
}

export { longestCommonSubsequence };
