/**
 * @typedef {"1" | "2" | "3" | "4" | "5" | "6" | "7" | "8" | "9" | "."} digit
 */

/**
 * Returns true if the partially-filled Sudoku board is valid.
 * Ignores '.' cells; does not solve the puzzle.
 * @param {digit[][]} board
 * @return {boolean}
 */
function isValidSudoku(board) {
  const rows = Array.from({ length: 9 }, () => new Set());
  const cols = Array.from({ length: 9 }, () => new Set());
  const boxes = Array.from({ length: 9 }, () => new Set());
  for (let r = 0; r < rows.length; r++) {
    for (let c = 0; c < cols.length; c++) {
      const ch = board[r][c];
      const box = Math.floor(r / 3) * 3 + Math.floor(c / 3);
      if (ch === '.') continue;
      if (rows[r].has(ch) || cols[c].has(ch) || boxes[box].has(ch))
        return false;
      rows[r].add(ch);
      cols[c].add(ch);
      boxes[box].add(ch);
    }
  }

  return true;
}

export { isValidSudoku };
