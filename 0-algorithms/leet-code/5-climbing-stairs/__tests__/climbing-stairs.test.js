import { describe, it, expect } from 'vitest';
import {
  climbStairs,
  climbStairsRecursive,
  climbStairsRecursiveMemo,
} from '../index.js';

describe('climbStairs', () => {
  it('handles base cases', () => {
    expect(climbStairs(1)).toBe(1);
    expect(climbStairs(2)).toBe(2);
    expect(climbStairsRecursive(1)).toBe(1);
    expect(climbStairsRecursive(2)).toBe(2);
    expect(climbStairsRecursiveMemo(1)).toBe(1);
    expect(climbStairsRecursiveMemo(2)).toBe(2);
  });

  it('computes small n correctly', () => {
    expect(climbStairs(3)).toBe(3);
    expect(climbStairs(4)).toBe(5);
    expect(climbStairs(5)).toBe(8);
    expect(climbStairsRecursive(3)).toBe(3);
    expect(climbStairsRecursive(4)).toBe(5);
    expect(climbStairsRecursive(5)).toBe(8);
    expect(climbStairsRecursiveMemo(3)).toBe(3);
    expect(climbStairsRecursiveMemo(4)).toBe(5);
    expect(climbStairsRecursiveMemo(5)).toBe(8);
  });

  it('computes larger n', () => {
    expect(climbStairs(10)).toBe(89);
    expect(climbStairsRecursive(10)).toBe(89);
    expect(climbStairsRecursiveMemo(10)).toBe(89);
  });

  it('handles upper bound n=45', () => {
    expect(climbStairs(45)).toBe(1836311903);
    // expect(climbStairsRecursive(45)).toBe(1836311903); // this times out
    expect(climbStairsRecursiveMemo(45)).toBe(1836311903);
  });
});
