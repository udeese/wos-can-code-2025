import { HashTable } from './hash-table.js';

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
  // TODO:
  // Initialize a HashTable.
  // Loop through each character of the string.
  // Apply options: lowercase if caseInsensitive, skip whitespace if ignoreWhitespace.
  // If table.has(ch), increment the stored value, else set to 1.
  // At the end, collect key–value pairs from table into a plain object and return it.
  const hash = HashTable(str.size);

  for (i = 0; i < str.length; i++) {
    if (caseInsensitive) str.toLowerCase();
    if (ignoreWhitespace) str.trim();

    const ch = str[i];

    if (hash.has(ch)) {
      const value = hash.get(key)

      hash.set(ch, value + 1); 
    }
    else {
      hash.set(ch, 1);
    }
  }
  
}

export { charFrequency, charFrequencyRaw };
