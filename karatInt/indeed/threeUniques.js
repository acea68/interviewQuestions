"use strict";
/* Given an input string s, return the number of times there are 3 unique characters in a row without repeats.
For example:
s='abcaa'
output = 2
reason: abc are unique and non-repeating. bca are unique and non-repeating. caa has a repeating a.
*/

// ----- SOLUTION ----- //

// i: string
// o: integer representing number of times a unique substring of characters are encountered
// c: symbols, spaces and numbers included (not only letters)
// e: empty string, repeated chars,

function threeUniques(string) {
  // create counter
  // iterate with two pointers
  // left pointer starts main iteration until last three chars
  // right pointer iterates three chars are a time from left pointer
  // when right char iterates, create new map
  // if map length is three, increment counter, otherwise, continue outside loop
  // return counter
  let counter = 0;
  for (let left = 0; left < string.length - 2; left++) {
    let map = {};
    for (let right = left; right < left + 3; right++) {
      if (!map[string[right]]) map[string[right]] = 1;
      else map[string[right]] += 1;
    }
    if (Object.keys(map).length === 3) counter += 1;
  }
  return counter
}

// console.log(threeUniques('abcaa'))
