/**
 * A simple Hash Table implementation using buckets (arrays) to handle collisions.
 */
class HashTable {
  /**
   * Creates a new HashTable with a fixed number of buckets.
   * Each bucket will be an array holding [key, value] pairs.
   * @param {number} [size=16] - Number of buckets (array length).
   */
  constructor(size = 16) {
    /** @type {Array<Array<[string, any]>>} */
    this.buckets = new Array(size).fill(null).map(() => []);
    this.size = size;
  }

  /**
   * Hashes a string key into an index between 0 and this.size - 1.
   * Strategy: accumulate character codes and mod by table size.
   * @param {string} key
   * @returns {number} A bucket index.
   * @complexity O(k) where k is the key length
   */
  #hash(key) {
    let hash = 0;
    for (let i = 0; i < key.length; i++) {
      hash = (hash + key.charCodeAt(i) * i) % this.size;
    }
    return hash;
  }

  /**
   * Inserts or updates a [key, value] pair in the appropriate bucket.
   * @param {string} key
   * @param {any} value
   * @returns {void}
   */
  set(key, value) {
    const index = this.#hash(key);
    const bucket = this.buckets[index];
    for (let i = 0; i < bucket.length; i++) {
      if (bucket[i][0] === key) {
        bucket[i][1] = value;
        return;
      }
    }
    bucket.push([key, value]);
  }

  /**
   * Retrieves the value for the given key, or undefined if not found.
   * @param {string} key
   * @returns {any|undefined}
   */
  get(key) {
    const index = this.#hash(key);
    const bucket = this.buckets[index];
    for (let i = 0; i < bucket.length; i++) {
      if (bucket[i][0] === key) {
        return bucket[i][1];
      }
    }
    return undefined;
  }

  /**
   * Checks whether the given key exists in the table.
   * @param {string} key
   * @returns {boolean}
   */
  has(key) {
    const index = this.#hash(key);
    const bucket = this.buckets[index];
    for (let i = 0; i < bucket.length; i++) {
      if (bucket[i][0] === key) {
        return true;
      }
    }
    return false;
  }

  /**
   * Removes the entry for the given key if found.
   * @param {string} key
   * @returns {boolean} True if removed, false if not found.
   */
  remove(key) {
    const index = this.#hash(key);
    const bucket = this.buckets[index];
    for (let i = 0; i < bucket.length; i++) {
      if (bucket[i][0] === key) {
        bucket.splice(i, 1);
        return true;
      }
    }
    return false;
  }

  /**
   * Returns an array of all keys in the table.
   * @returns {string[]}
   */
  keys() {
    const result = [];
    for (const bucket of this.buckets) {
      for (const [key] of bucket) {
        result.push(key);
      }
    }
    return result;
  }

  /**
   * Returns an array of all values in the table.
   * @returns {any[]}
   */
  values() {
    const result = [];
    for (const bucket of this.buckets) {
      for (const [, value] of bucket) {
        result.push(value);
      }
    }
    return result;
  }

  /**
   * Returns an array of [key, value] pairs.
   * @returns {Array<[string, any]>}
   */
  entries() {
    const result = [];
    for (const bucket of this.buckets) {
      for (const [key, value] of bucket) {
        result.push([key, value]);
      }
    }
    return result;
  }
}

export { HashTable };
