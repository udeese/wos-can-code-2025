import { describe, it, expect } from 'vitest';
import { charFrequency } from '../algorithms/char-frequency.js';
import { firstNonRepeatingChar } from '../algorithms/first-non-repeating.js';
import { dedupeArray } from '../algorithms/dedupe-array.js';

describe('charFrequency (Day 2 algo using HashTable)', () => {
  it('counts letters case-insensitively and ignores whitespace by default', () => {
    const res = charFrequency('A a  Bb\tB  c');
    expect(res).toEqual({ a: 2, b: 3, c: 1 });
  });

  it('handles punctuation and numbers', () => {
    const res = charFrequency('ab!! 123');
    // default options: lowercased, whitespace ignored
    expect(res).toEqual({ a: 1, b: 1, '!': 2, 1: 1, 2: 1, 3: 1 });
  });
});

describe('firstNonRepeatingChar (Day 3 algo using HashTable)', () => {
  it('returns null for empty string or when no non-repeating char exists', () => {
    expect(firstNonRepeatingChar('')).toBeNull();
    // every character repeats (ignoring whitespace, case-insensitive by default)
    expect(firstNonRepeatingChar('a A  bB')).toBeNull();
  });

  it('finds the first non-repeating character (default: case-insensitive, ignore whitespace)', () => {
    // 'swiss' -> counts: s:3, w:1, i:1 ⇒ first unique is 'w'
    expect(firstNonRepeatingChar('swiss')).toBe('w');

    // with whitespace sprinkled in, still finds first unique
    expect(firstNonRepeatingChar(' s w i s s ')).toBe('w');
  });

  it('respects options: case sensitive and keep whitespace', () => {
    // caseSensitive: 'A', 'a', 'B' are all unique; first is 'A'
    expect(
      firstNonRepeatingChar('AaB', {
        caseInsensitive: false,
        ignoreWhitespace: false,
      })
    ).toBe('A');

    // keeping whitespace means a space can be the first unique if it qualifies
    // Here: 'a a\tb ' (space repeats), add a tab to be unique first
    expect(
      firstNonRepeatingChar('a a\tb ', {
        caseInsensitive: true,
        ignoreWhitespace: false,
      })
    ).toBe('\t');
  });
});

describe('dedupeArray (Day 3 algo using HashTable)', () => {
  it('returns empty array for empty input', () => {
    expect(dedupeArray([])).toEqual([]);
  });

  it('removes duplicates while preserving first-seen order', () => {
    const input = [3, 1, 3, 2, 1, 4, 2];
    expect(dedupeArray(input)).toEqual([3, 1, 2, 4]);
  });

  it('treats numbers and strings with the same characters as distinct (1 vs "1")', () => {
    const input = [1, '1', 1, '1', 2, '2'];
    expect(dedupeArray(input)).toEqual([1, '1', 2, '2']);
  });

  it('handles punctuation and mixed primitives', () => {
    const input = ['a', 'a', '!', '!', 'b', true, false, true, 0, '0'];
    expect(dedupeArray(input)).toEqual(['a', '!', 'b', true, false, 0, '0']);
  });
});
