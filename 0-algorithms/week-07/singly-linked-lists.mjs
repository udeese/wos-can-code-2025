class ListNode {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

class SinglyLinkedList {
  constructor() {
    this.head = null;
  }

  /**
   * Determines if this list is empty.
   * - Time: O(?).
   * - Space: O(?).
   * @returns {boolean}
   */
  isEmpty() {
    return this.head === null;
  }

  /**
   * Creates a new node with the given data and inserts it at the back of
   * this list.
   * - Time: O(?).
   * - Space: O(?).
   * @param {any} data The data to be added to the new node.
   * @returns {SinglyLinkedList} This list.
   */
  insertAtBack(data) {
    const newNode = new ListNode(data);
    if (this.isEmpty()) {
      this.head = newNode;
      return this;
    }

    let runner = this.head;
    while (runner.next) {
      runner = runner.next;
    }

    runner.next = newNode;
    return this;
  }

  /**
   * Creates a new node with the given data and inserts it at the back of
   * this list.
   * - Time: O(?).
   * - Space: O(?).
   * @param {any} data The data to be added to the new node.
   * @param {?ListNode} runner The current node during the traversal of this list
   *    or null when the end of the list has been reached.
   * @returns {SinglyLinkedList} This list.
   */
  insertAtBackRecursive(data, runner = this.head) {
    // your code here
  }

  /**
   * Calls insertAtBack on each item of the given array.
   * - Time: O(n * m) n = list length, m = arr.length.
   * - Space: O(1) constant.
   * @param {Array<any>} vals The data for each new node.
   * @returns {SinglyLinkedList} This list.
   */
  insertAtBackMany(vals) {
    for (const item of vals) {
      this.insertAtBack(item);
    }
    return this;
  }

  /**
   * Creates a new node with the given data and inserts that node at the front
   * of this list.
   * - Time: (?).
   * - Space: (?).
   * @param {any} data The data for the new node.
   * @returns {SinglyLinkedList} This list.
   */
  insertAtFront(data) {
    const newNode = new ListNode(data);
    if (this.isEmpty()) {
      this.head = newNode;
    } else {
      newNode.next = this.head;
      this.head = newNode;
    }

    return this;
  }

  /**
   * Removes the first node of this list.
   * - Time: (?).
   * - Space: (?).
   * @returns {any} The data from the removed node.
   */
  removeHead() {
    if (this.isEmpty()) {
      console.log('This list is empty.');
      return null;
    }

    const removed = this.head.data;
    this.head = this.head.next;

    return removed;
  }

  // EXTRA
  /**
   * Calculates the average of this list.
   * - Time: (?).
   * - Space: (?).
   * @returns {number|NaN} The average of the node's data.
   */
  average() {
    if (this.isEmpty()) {
      console.log('This list is empty');
      return null;
    }

    let runner = this.head;
    let total = 0;
    let count = 0;
    while (runner) {
      count++;
      total = total + runner.data;
      runner = runner.next;
    }

    return total / count;
  }

  /**
   * Removes the last node of this list.
   * - Time: O(?).
   * - Space: O(?).
   * @returns {any} The data from the node that was removed.
   */
  removeBack() {
    // your code here
  }

  /**
   * Determines whether or not the given search value exists in this list.
   * - Time: O(?).
   * - Space: O(?).
   * @param {any} val The data to search for in the nodes of this list.
   * @returns {boolean}
   */
  contains(val) {
    // your code here
  }

  /**
   * Determines whether or not the given search value exists in this list.
   * - Time: O(?).
   * - Space: O(?).
   * @param {any} val The data to search for in the nodes of this list.
   * @param {?ListNode} current The current node during the traversal of this list
   *    or null when the end of the list has been reached.
   * @returns {boolean}
   */
  containsRecursive(val, current = this.head) {
    // your code here
  }

  // TODO: Reverse the list in place.
  // Use three pointers: prev, runner, next.
  // Return the list.
  reverse() {
    // Your code here
    let prev = null;
    let runner = this.head;

    while (runner) {
      let next = runner.next;
      runner.next = prev;
      prev = runner;
      runner = next;
    }

    this.head = prev;
    return this;
  }

  /**
   * Concatenates the nodes of a given list onto the back of this list.
   * - Time: O(n) to reach this list's tail (0 if this list is empty).
   * - Space: O(1).
   * @param {SinglyLinkedList} addList An instance of a different list whose
   *    nodes will be added to the back of this list.
   * @returns {SinglyLinkedList} This list with the added nodes.
   */
  concat(addList) {
    let runner = this.head;
    while(runner.next) {
      runner = runner.next
    }

    runner.next = addList.head;
    console.log(this.toArr());
    return this;
  }

  /**
   * Finds the node with the smallest data and moves that node to the front of
   * this list.
   * - Time: O(n).
   * - Space: O(1).
   * @returns {SinglyLinkedList} This list.
   */
  moveMinToFront() {
    let runner = this.head;
    let minNode = this.head;
    let prev = null;
    let minPrev = null;

    while (runner) {
      if (runner.data < minNode.data) {
        minNode = runner;
        minPrev = prev;
      }
      prev = runner;
      runner = runner.next;
    }

    if (minPrev === null)
      return this;
    minPrev.next = minNode.next;
    this.insertAtFront(minNode.data);
    return this;
  }

  // ============================================================
  // STRETCH GOAL: Selection Sort (O(n^2) time, O(1) extra space)
  // Repeatedly move the minimum of the *unsorted suffix* to the
  // front of that suffix—exactly the selection-sort step.
  // ============================================================

  /**
   * Helper: move the min node of the sublist starting at `start`
   * to the front of that sublist, returning the new sublist head.
   * - Time: O(k) where k is length of the sublist.
   * - Space: O(1).
   * @param {ListNode} start
   * @returns {ListNode} new head of the sublist
   */
  static _moveMinToFrontFrom(start) {
    const subList = new SinglyLinkedList();
    subList.head = start;
    subList.moveMinToFront();

    return subList.head;
  }

  /**
   * Stretch Goal: In-place selection sort for the entire list.
   * - Time: O(n^2) (n passes, each pass scans the remaining suffix).
   * - Space: O(1).
   * @returns {SinglyLinkedList} This list sorted ascending.
   */
  selectionSort() {
    let runner = this.head;
    while (runner) {
      const newHead = this._moveMinToFrontFrom(runner);
      runner = newHead.next;
    }

    return this;
  }

  /**
   * Converts this list into an array containing the data of each node.
   * - Time: O(n) linear.
   * - Space: O(n).
   * @returns {Array<any>} An array of each node's data.
   */
  toArr() {
    const arr = [];
    let runner = this.head;

    while (runner) {
      arr.push(runner.data);
      runner = runner.next;
    }
    return arr;
  }

  // TODO: Return the concatenated string of node.data from head -> tail.
  toString() {
    let output = '';
    let current = this.head;
    while (current) {
      output += current.data;
      current = current.next;
    }
    return output;
  }
}

/******************************************************************* 
Multiple test lists already constructed to test your methods on.
Below commented code depends on insertAtBack method to be completed,
after completing it, uncomment the code.
*/
// const emptyList = new SinglyLinkedList();

const mySLL = new SinglyLinkedList();
// const mySLL2 = new SinglyLikedList();

// ===================== TEST SUITE =====================

function assertArrayEq(actual, expected, label) {
  const pass =
    Array.isArray(actual) &&
    Array.isArray(expected) &&
    actual.length === expected.length &&
    actual.every((v, i) => v === expected[i]);

  if (!pass) {
    console.error(
      `❌ ${label}\n expected: [${expected}]\n      got: [${actual}]`
    );
    throw new Error(`Test failed: ${label}`);
  } else {
    console.log(`✅ ${label}`);
  }
}

let TOTAL = 0,
  PASSED = 0;
function test(label, fn) {
  TOTAL++;
  try {
    fn();
    PASSED++;
    console.log(`✔️  ${label}`);
  } catch (e) {
    console.error(`✖️  ${label}`);
  }
}

// --- concat ---
test('Concat: empty <- non-empty', () => {
  const a = new SinglyLinkedList();
  const b = new SinglyLinkedList();
  b.insertAtBack(1).insertAtBack(2).insertAtBack(3);
  a.concat(b);
  assertArrayEq(a.toArr(), [1, 2, 3], 'concat result');
  assertArrayEq(b.toArr(), [], 'source detached');
});

test('Concat: non-empty <- empty', () => {
  const a = new SinglyLinkedList();
  a.insertAtBack(10).insertAtBack(20);
  const b = new SinglyLinkedList();
  a.concat(b);
  console.log(a.toArr(), "test");
  assertArrayEq(a.toArr(), [10, 20], 'concat no-op');
  assertArrayEq(b.toArr(), [], 'empty addList unchanged');
});

// --- moveMinToFront ---
test('moveMinToFront: min already at front', () => {
  const s = new SinglyLinkedList();
  s.insertAtBack(1).insertAtBack(50).insertAtBack(100);
  s.moveMinToFront();
  assertArrayEq(s.toArr(), [1, 50, 100], 'no change');
});

test('moveMinToFront: min in middle', () => {
  const s = new SinglyLinkedList();
  s.insertAtBack(50).insertAtBack(10).insertAtBack(70);
  s.moveMinToFront();
  assertArrayEq(s.toArr(), [10, 50, 70], 'min to front');
});

test('moveMinToFront: min at end', () => {
  const s = new SinglyLinkedList();
  s.insertAtBack(100).insertAtBack(90).insertAtBack(5);
  s.moveMinToFront();
  assertArrayEq(s.toArr(), [5, 100, 90], 'min to front');
});

// --- selectionSort (stretch) ---
test('selectionSort: random order', () => {
  const s = new SinglyLinkedList();
  [50, 10, 70, 20].forEach((v) => s.insertAtBack(v));
  s.selectionSort();
  assertArrayEq(s.toArr(), [10, 20, 50, 70], 'sorted ascending');
});

test('selectionSort: already sorted', () => {
  const s = new SinglyLinkedList();
  [1, 2, 3, 4].forEach((v) => s.insertAtBack(v));
  s.selectionSort();
  assertArrayEq(s.toArr(), [1, 2, 3, 4], 'unchanged');
});

test('selectionSort: reverse order', () => {
  const s = new SinglyLinkedList();
  [5, 4, 3, 2, 1].forEach((v) => s.insertAtBack(v));
  s.selectionSort();
  assertArrayEq(s.toArr(), [1, 2, 3, 4, 5], 'sorted ascending');
});

// --- summary ---
console.log(`\n${PASSED}/${TOTAL} tests passed`);

export { SinglyLinkedList, ListNode };
// console.log(mySLL.addList())