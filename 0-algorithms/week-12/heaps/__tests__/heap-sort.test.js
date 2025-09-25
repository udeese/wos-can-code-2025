import { describe, it, expect } from 'vitest';
import { heapSort, heapSortInPlace } from './heap-sort.js';

function sortedCopy(a) {
  return [...a].sort((m, n) => m - n);
}

describe('heapSort (MinHeap-based, non-mutating)', () => {
  it('handles empty and single-element arrays', () => {
    expect(heapSort([])).toEqual([]);
    expect(heapSort([7])).toEqual([7]);
  });

  it('sorts a typical array ascending', () => {
    const arr = [5, 3, 8, 1, 2, 7, 4, 6];
    expect(heapSort(arr)).toEqual(sortedCopy(arr));
    // does not mutate input
    expect(arr).toEqual([5, 3, 8, 1, 2, 7, 4, 6]);
  });

  it('works with negatives and duplicates', () => {
    const arr = [0, -1, 5, -1, 3, 3, 2];
    expect(heapSort(arr)).toEqual(sortedCopy(arr));
  });
});

describe('heapSortInPlace (array-only, mutating)', () => {
  it('returns the same array instance', () => {
    const a = [3, 2, 1];
    const res = heapSortInPlace(a);
    expect(res).toBe(a);
  });

  it('sorts ascending in place (already sorted, reverse sorted)', () => {
    const already = [1, 2, 3, 4, 5];
    heapSortInPlace(already);
    expect(already).toEqual([1, 2, 3, 4, 5]);

    const reverse = [5, 4, 3, 2, 1];
    heapSortInPlace(reverse);
    expect(reverse).toEqual([1, 2, 3, 4, 5]);
  });

  it('sorts arrays with negatives and duplicates', () => {
    const arr = [2, -5, 2, 0, -1, 3, 3];
    heapSortInPlace(arr);
    expect(arr).toEqual(sortedCopy(arr));
  });

  it('matches Array.prototype.sort for random cases', () => {
    for (let t = 0; t < 5; t++) {
      const n = 50;
      const arr = Array.from(
        { length: n },
        () => Math.floor(Math.random() * 100) - 50
      );
      const copy = [...arr];
      heapSortInPlace(arr);
      expect(arr).toEqual(sortedCopy(copy));
    }
  });
});
