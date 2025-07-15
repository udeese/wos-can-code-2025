/* 
  Array: Concat

  .push allowed: arrName.push(newItem)

  Replicate JavaScript’s concat() which combines two arrays into one NEW array

  Input: two arrays
  Output: one NEW array with the items of both in the original order
*/

const arrA1 = ['a', 'b'];
const arrB1 = [1, 2, 3];
const expected1 = ['a', 'b', 1, 2, 3];

const arrA2 = [1, 2, 3];
const arrB2 = ['a', 'b'];
const expected2 = [1, 2, 3, 'a', 'b'];

/**
 * Concatenates the given arrays together into order that they are passed in.
 * - Time: O(?).
 * - Space: O(?).
 * @param {Array<any>} items1
 * @param {Array<any>} items2
 * @returns {Array<any>} The new arr that is a concatenation of the given arrays.
 */
function concat(items1, items2) {
  // code here
}

// Tests
const result1 = concat(arrA1, arrB1);
console.log(result1, 'should be', expected1);

const result2 = concat(arrA2, arrB2);
console.log(result2, 'should be', expected2);
