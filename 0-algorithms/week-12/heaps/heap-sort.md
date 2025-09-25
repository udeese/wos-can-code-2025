# Heap Sort

## Introduction

Heap sort is a **comparison-based sorting algorithm** that uses the properties of a binary heap to order elements.
It runs in **O(n log n)** time and can be implemented in two main ways:

- Using a `MinHeap` class (simple to understand).
- Using an **in-place max-heap** (bonus, more efficient with memory).

---

## Heap Sort with MinHeap

This version uses the `MinHeap` data structure we built earlier.

**Algorithm Steps**

1. Create a new `MinHeap`.
2. Insert every element from the array into the heap.
3. Initialize an empty output array.
4. While the heap is not empty:
   - Extract the minimum.
   - Append it to the output array.
5. Return the output array.

**Complexity**

- Building the heap: O(n log n) (inserting each element).
- Extracting all elements: O(n log n).
- Total: **O(n log n)**.

---

## In-Place Heap Sort (Bonus)

The in-place version doesn’t require a separate `MinHeap` object. Instead, it reuses the input array.

**Algorithm Steps**

1. Convert the array into a **max-heap** (bottom-up heapify).
2. For `end` = last index down to 1:
   - Swap the root (maximum) with the element at `end`.
   - Reduce the heap size by 1.
   - Restore the heap property with `siftDown`.
3. The array is now sorted in ascending order.

**Complexity**

- Heapify: O(n).
- Extract + sift down: O(n log n).
- Total: **O(n log n)**.

---

## Key Takeaways

- Heap sort is a stable O(n log n) sorting algorithm.
- The **MinHeap approach** is easier to implement and explain.
- The **in-place approach** is memory efficient and often used in practice.
- Both approaches rely on the heap property to ensure sorted output.
