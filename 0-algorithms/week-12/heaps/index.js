import { MinHeap } from './min-heap.js';

const heap = new MinHeap();

const values = [50, 30, 20, 15, 10];
for (const value of values) {
  heap.insert(value);
  console.log(heap.data);
}

const n = heap.data.length - 1;

for (let i = 0; i < n; i++) {
  const min = heap.extractMin();
  console.log(`Min: ${min}`);
  console.log(heap.data);
}
