import { HashTable } from '../hash-table.js';

/**
 * Builds a character frequency table using the custom HashTable.
 * By default the function lowercases letters and ignores whitespace.
 * You can override this via the options parameter.
 *
 * @param {string} str - Input string to analyze.
 * @param {{ ignoreWhitespace?: boolean, caseInsensitive?: boolean }} [options]
 * @returns {Record<string, number>} An object mapping each character to its count.
 */
function charFrequency(
  str,
  { ignoreWhitespace = true, caseInsensitive = true } = {}
) {
  const table = new HashTable(Math.max(16, str.length * 2));

  for (let ch of str) {
    if (caseInsensitive) ch = ch.toLowerCase();
    if (ignoreWhitespace && /\s/.test(ch)) continue;

    if (table.has(ch)) {
      const current = table.get(ch);
      table.set(ch, current + 1);
    } else {
      table.set(ch, 1);
    }
  }

  // Collect into a plain object
  /** @type {Record<string, number>} */
  const out = {};
  for (const bucket of table.buckets) {
    for (const [key, value] of bucket) {
      out[key] = value;
    }
  }
  return out;
}

export { charFrequency };
