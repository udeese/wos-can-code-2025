/**
 * Groups an array of strings into arrays of anagrams.
 *
 * @param {string[]} strs - The input array of strings.
 * @returns {string[][]} An array of groups, where each group contains words that are anagrams of each other.
 */
function groupAnagrams(strs) {
  // TODO: Implement groupAnagrams using a hash map
  // 1. Initialize a Map to hold key → group of words
  // 2. For each word in strs:
  //    a. Convert the word into a canonical key (e.g., sort its letters)
  //    b. Insert the word into the Map under that key
  // 3. Collect all the values from the Map
  // 4. Return them as an array of arrays
  const map = new Map();
  for (let word of strs){
    let key = word.split('').sort().join('');
    if (!map.has(key)) {
      map.set(key, []);
    }
    map.get(key).push(word);
  }
  return Array.from(map.values());
}

export { groupAnagrams };
