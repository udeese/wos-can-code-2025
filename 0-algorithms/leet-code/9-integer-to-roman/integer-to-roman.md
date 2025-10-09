# Integer to Roman

## Problem

Given an integer, convert it to a Roman numeral.

Roman numerals are represented by the following symbols:

| Symbol | Value |
| :----: | :---: |
|   I    |   1   |
|   V    |   5   |
|   X    |  10   |
|   L    |  50   |
|   C    |  100  |
|   D    |  500  |
|   M    | 1000  |

Roman numerals are written from largest to smallest from left to right. However, **in some cases, subtraction is used**:

- `IV` = 4 (one before five)
- `IX` = 9 (one before ten)
- `XL` = 40 (ten before fifty)
- `XC` = 90 (ten before one hundred)
- `CD` = 400 (one hundred before five hundred)
- `CM` = 900 (one hundred before one thousand)

---

## Rules

Roman numerals are formed by appending the conversions of decimal place values from highest to lowest. Converting a decimal place value into a Roman numeral has the following rules:

- If the value does not start with 4 or 9, select the symbol of the maximal value that can be subtracted from the input, append that symbol to the result, subtract its value, and convert the remainder to a Roman numeral.
- If the value starts with 4 or 9 use the subtractive form representing one symbol subtracted from the following symbol, for example, 4 is 1 (I) less than 5 (V): IV and 9 is 1 (I) less than 10 (X): IX. Only the following subtractive forms are used: 4 (IV), 9 (IX), 40 (XL), 90 (XC), 400 (CD) and 900 (CM).
- Only powers of 10 (I, X, C, M) can be appended consecutively at most 3 times to represent multiples of 10. You cannot append 5 (V), 50 (L), or 500 (D) multiple times. If you need to append a symbol 4 times use the subtractive form.

## Intuition

We can repeatedly subtract the largest Roman numeral value that fits into the remaining number and append its symbol to the result string.

---

## Plan

1. Create two parallel arrays of Roman symbols and their numeric values, ordered from largest to smallest.
2. Start with an empty result string.
3. While the number is greater than zero:
   - Find the largest value less than or equal to the number.
   - Append its symbol to the result.
   - Subtract that value from the number.
4. Return the result string.

**Time:** O(1) – because the Roman numeral system has a fixed range (1–3999)
**Space:** O(1)

---

### Example 1

Input: `num = 3749`
Output: `"MMMDCCXLIX"`

Explanation:

3000 = MMM as 1000 (M) + 1000 (M) + 1000 (M)
700 = DCC as 500 (D) + 100 (C) + 100 (C)
40 = XL as 10 (X) less of 50 (L)
9 = IX as 1 (I) less of 10 (X)

Note: 49 is not 1 (I) less of 50 (L) because the conversion is based on decimal places

---

### Example 2

Input: `num = 58`
Output: `"LVIII"`

Explanation:
50 = L
8 = VIII

---

### Example 3

Input: `num = 1994`
Output: `"MCMXCIV"`

Explanation:
1000 = M
900 = CM
90 = XC
4 = IV
