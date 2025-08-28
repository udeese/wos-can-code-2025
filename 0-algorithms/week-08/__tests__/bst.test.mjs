import { describe, it, expect, beforeEach } from '@jest/globals';
import { BinarySearchTree } from '../bst.mjs';
import { seed } from '../index.mjs';

describe('Binary Search Tree', () => {
  // arrange
  let bst = new BinarySearchTree();
  seed.forEach((v) => bst.insert(v));

  // act and assert
  it('inserts and contains values', () => {
    expect(bst.contains(7)).toBe(true);
    expect(bst.contains(2)).toBe(false);
    bst.insert(2);
    expect(bst.contains(2)).toBe(true);
  });
});

describe('Min and max', () => {
  let bst = new BinarySearchTree();
  seed.forEach((v) => bst.insert(v));

  it('returns min and max (and null for empty)', () => {
    expect(bst.min()).toBe(1);
    expect(bst.max()).toBe(14);

    const empty = new BinarySearchTree();
    expect(empty.min()).toBeNull();
    expect(empty.max()).toBeNull();
  });
});

describe('traversals', () => {
  let bst;

  beforeEach(() => {
    bst = new BinarySearchTree();
    seed.forEach((v) => bst.insert(v));
  });

  it('inOrder returns sorted values', () => {
    expect(bst.inOrder()).toEqual([1, 3, 4, 6, 7, 8, 10, 13, 14]);
  });

  it('preOrder follows correct order', () => {
    expect(bst.preOrder()).toEqual([8, 3, 1, 6, 4, 7, 10, 14, 13]);
  });

  it('postOrder follows correct order', () => {
    expect(bst.postOrder()).toEqual([1, 4, 7, 6, 3, 13, 14, 10, 8]);
  });
});

describe('height', () => {
  let bst = new BinarySearchTree();
  seed.forEach((v) => bst.insert(v));

  it('computes height (0 for empty, === 4 once seeded)', () => {
    const empty = new BinarySearchTree();
    expect(empty.height()).toBe(0);
    expect(bst.height()).toBe(4);
  });
});

describe('isValidBST', () => {
  let bst = new BinarySearchTree();
  seed.forEach((v) => bst.insert(v));

  it('validates BST invariant', () => {
    expect(bst.isValidBST()).toBe(true);

    // Break the invariant
    const root = bst.root;
    root.left.right.left.value = 9;
    expect(bst.isValidBST()).toBe(false);
  });
});

describe('remove (delete)', () => {
  let bst;

  beforeEach(() => {
    bst = new BinarySearchTree();
    seed.forEach((v) => bst.insert(v));
  });

  it('removes a leaf node', () => {
    expect(bst.contains(1)).toBe(true); // sanity
    bst.remove(1); // leaf in the seeded tree
    expect(bst.contains(1)).toBe(false);
    expect(bst.isValidBST()).toBe(true);
    expect(bst.inOrder()).toEqual([3, 4, 6, 7, 8, 10, 13, 14]);
  });

  it('removes a node with one child', () => {
    // In the seeded tree, 14 has a single left child 13
    expect(bst.contains(14)).toBe(true);
    bst.remove(14);
    expect(bst.contains(14)).toBe(false);
    expect(bst.max()).toBe(13); // new max after removing 14
    expect(bst.isValidBST()).toBe(true);
    expect(bst.inOrder()).toEqual([1, 3, 4, 6, 7, 8, 10, 13]);
  });

  it('removes a node with two children (uses inorder successor)', () => {
    // Node 3 has two children in the seeded tree (1 and 6)
    expect(bst.contains(3)).toBe(true);
    bst.remove(3);
    expect(bst.contains(3)).toBe(false);
    // After removing 3, successor should be 4, keeping order intact
    expect(bst.inOrder()).toEqual([1, 4, 6, 7, 8, 10, 13, 14]);
    expect(bst.isValidBST()).toBe(true);
  });

  it('removes the root when it has two children', () => {
    expect(bst.contains(8)).toBe(true);
    bst.remove(8);
    expect(bst.contains(8)).toBe(false);
    // With our seed, successor of 8 is 10 (min of right subtree)
    expect(bst.inOrder()).toEqual([1, 3, 4, 6, 7, 10, 13, 14]);
    expect(bst.isValidBST()).toBe(true);
  });

  it('removing a non-existent value leaves the tree unchanged', () => {
    const before = bst.inOrder();
    bst.remove(9999); // not present
    expect(bst.inOrder()).toEqual(before);
    expect(bst.isValidBST()).toBe(true);
  });
});
