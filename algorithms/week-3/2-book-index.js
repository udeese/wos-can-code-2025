/*
Book Index

Given an array of ints representing page numbers
return a string with the page numbers formatted as page ranges when the nums
span a consecutive range.
*/

const numsA = [1, 13, 14, 15, 37, 38, 70];
const expectedA = '1, 13-15, 37-38, 70';

const numsB = [5, 6, 7, 8, 9];
const expectedB = '5-9';

const numsC = [1, 2, 3, 7, 9, 15, 16, 17];
const expectedC = '1-3, 7, 9, 15-17';

/**
 * Turns the given arr of page numbers into a string of comma hyphenated
 * page ranges.
 * - Time: O(?).
 * - Space: O(?).
 * @param {Array<number>} nums Page numbers.
 * @returns {string} The given page numbers as comma separated hyphenated
 *    page ranges.
 */
function bookIndex(nums) {
  let formattedPageNums = '';
  let pageRangeStartIdx = 0;

  for (let i = 0; i < nums.length; i++) {
    let currentPageNum = nums[i];
    let nextPageNum = nums[i + 1];
    let pageRangeStopIdx = i;

    // page range is not sequential
    if (currentPageNum + 1 !== nextPageNum) {
      // single page, no range
      if (pageRangeStartIdx === pageRangeStopIdx) {
        formattedPageNums += currentPageNum;
      }
      // we have a page range
      else {
        formattedPageNums += `${nums[pageRangeStartIdx]}-${nums[pageRangeStopIdx]}`;
      }
      if (i !== nums.length - 1) {
        formattedPageNums += ', ';
      }

      // Since we've added a page range
      // need to get start idx set up for next page range
      pageRangeStartIdx = i + 1;
    }
  }
  return formattedPageNums;
}

console.log(`${bookIndex(numsA)} should equal ${expectedA}`);
console.log(`${bookIndex(numsB)} should equal ${expectedB}`);
console.log(`${bookIndex(numsC)} should equal ${expectedC}`);
