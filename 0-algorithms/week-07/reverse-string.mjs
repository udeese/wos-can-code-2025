import { ListNode, SinglyLinkedList } from './singly-linked-lists.mjs';

/**
 * Build an SLL from `str`, reverse it, return the reversed string.
 * Rules: Do not use arrays or built-in string reverse helpers.
 */
function reverseStringUsingSLL(str) {
  const stringSLL = new SinglyLinkedList();
  for (const char of str) {
    stringSLL.insertAtBack(char);
  }

  stringSLL.reverse();
  return stringSLL.toString();
}

/* ====== Quick Tests ====== */
console.log(reverseStringUsingSLL('racecar')); // "racecar"
console.log(reverseStringUsingSLL('Nixie')); // "eixiN"
console.log(reverseStringUsingSLL('')); // ""
console.log(reverseStringUsingSLL('abcde')); // "edcba"
