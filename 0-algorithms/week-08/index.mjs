import { BinarySearchTree } from './bst.mjs';

export const seed = [8, 3, 10, 1, 6, 14, 4, 7, 13];

const bst = new BinarySearchTree();
seed.forEach((v) => bst.insert(v));

bst.prettyPrint();
