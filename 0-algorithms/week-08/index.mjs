import { BinarySearchTree } from './bst.mjs';

export const seed = [8, 3, 10, 1, 6, 14, 4, 7, 13];

const bst = new BinarySearchTree();
seed.forEach((v) => bst.insert(v));

bst.prettyPrint();

console.log(`Min: ${bst.min()} should equal 1`);
console.log(`Max: ${bst.max()} should equal 14`);

console.log('\nTraversals:');
console.table({
  inOrder: bst.inOrder(),
  expect: [1, 3, 4, 6, 7, 8, 10, 13, 14],
});
console.table({
  preOrder: bst.preOrder(),
  expect: [8, 3, 1, 6, 4, 7, 10, 14, 13],
});
console.table({
  postOrder: bst.postOrder(),
  expect: [1, 4, 7, 6, 3, 13, 14, 10, 8],
});

console.log(`Height: ${bst.height()} should equal 4`);

console.log(`isValidBST: ${bst.isValidBST()} should equal true`);

// break invariant manually
const root = bst.root;
root.left.right.left.value = 9;
console.log(`isValidBST: ${bst.isValidBST()} should equal false`);

// repair invariant
root.left.right.left.value = 4;

console.log(bst.height());

console.log(bst.remove(1));
bst.prettyPrint;