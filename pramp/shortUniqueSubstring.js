/* Smallest Substring of All Characters
Given an array of unique characters arr and a string str, Implement a function getShortestUniqueSubstring that finds the smallest substring of str containing all the characters in arr. Return "" (empty string) if such a substring doesn’t exist.

Come up with an asymptotically optimal solution and analyze the time and space complexities.

Example:

input:  arr = ['x','y','z'], str = "xyyzyzyx"

output: "zyx"
Constraints:

[time limit] 5000ms

[input] array.character arr

1 ≤ arr.length ≤ 30
[input] string str

1 ≤ str.length ≤ 500
[output] string
*/

// function getShortestUniqueSubstring(arr, str) {
//   // create map from input arr: each char in arr is a key
//   // value is # appearances
//   // create var 'potential' which represents a potential substirng result
//   // iterate thru str & append chars to 'pot'
//   // when 'pot' is same length of arr
//   // map out substring
//   // compare object keys and values
//   // if they all match (between 'potential' vs. substring map)
//   // return substring
//   let obj = {};
//   for (let i of arr) {
//     if (!obj[i]) {
//       obj[i] = 1; // initiates value (# of times encountered) at 1
//     } else {
//       obj[i]++;
//     }
//   }
//   console.log('obj: ', obj);
//   let potential = '';
//   first:
//   for (let j = 0; j < str.length; j++) {
//     if (potential.length < arr.length) { // build potential substring
//       potential += str[j];
//     } else if (potential.length === arr.length) {
//       let potArr = potential.split('');
//       console.log('potArr: ', potArr);
//       // potArr.push(str[j]);
//       // potArr.shift();

//       let objSubstring = {};
//       for (let k of potArr) {
//         if (!objSubstring[i]) {
//           objSubstring[i] = 1; // initiates value (# of times encountered) at 1
//         } else {
//           objSubstring[i]++;
//         }
//       }

//       for (let key in objSubstring) {
//         if (obj[key] < objSubstring[key]) {
//           objSubstring = {};
//           continue first;
//         }
//       }
//       return potential;
//     } else {
//       potArr.push(str[j]);
//       potArr.shift();
//     }
//   }
// }

function getShortestUniqueSubstring(arr, str) {
  // let map = {}; // may not need this to map arr ...
  let substr = '';
  for (let i = 0; i < str.length - 2; i++) {
    substr = str.slice(i, i + arr.length);
    if (validate(substr, arr)) return substr;
  }

  function validate(ss, arr) {
    let subMap = new Set();
    for (let j = 0; j < ss.length; j++) {
      subMap.add(ss[j]);
    }
    if (subMap.size === arr.length) return true
    return false;
  }

}
let result = getShortestUniqueSubstring(['x', 'y', 'z'], "xyyzyzyx");
console.log(result);


//We scan the input string str from left to right while maintaining two indices - headIndex and tailIndex.

/* At each iteration, we examine a temporary substring [str.charAt(headIndex),str.charAt(headIndex+1),..., str.charAt(tailIndex)] and keep a copy of the shortest valid substring we’ve seen so far. Said differently, we keep incrementing tailIndex until the above substring contains every unique character in arr.

If the size of the resulting substring equals to arr.length then we return it since by definition there can’t be a shorter valid substring (otherwise, it’ll be missing 1 or more unique characters from arr).

Once we found a valid substring, we increment headIndex as long the substring remains valid. At every increment we also check if the current valid substring is shorter than the previously kept one. If it is, we update result to be the current substring.

We keep repeating the above steps in a loop until we either reach the end of the input string str or return the shortest valid substring, whichever comes first.

To examine the validity of str substrings we use 2 counters:

uniqueCounter (Integer) - the number of unique characters of arr that our current substring contains.
countMap (Map/Hash Table) - the number of occurrences of each character of arr in our current substring.// */


// function getShortestUniqueSubstring(arr, str):
//   headIndex = 0
// result = ""
// uniqueCounter = 0
// countMap = new Map()

//     # initialize countMap
// for i from 0 to arr.length - 1:
// countMap.setValueOf(arr[i], 0)

//     # scan str
// for tailIndex from 0 to str.length - 1:
//         # handle the new tail
// tailChar = str.charAt(tailIndex)

//         # skip all the characters not in arr
// if (countMap.keyExists(tailChar) == false):
//   continue

// tailCount = countMap.getValueOf(tailChar)
// if (tailCount == 0):
//   uniqueCounter = uniqueCounter + 1

// countMap.setValueOf(tailChar, tailCount + 1)

//         # push head forward
// while (uniqueCounter == arr.length):
//   tempLength = tailIndex - headIndex + 1
// if (tempLength == arr.length):
//                 # return a substring of str from
//                 # headIndex to tailIndex(inclusive)
// return str.substring(headIndex, tailIndex)

// if (result == "" OR tempLength < result.length):
//                 # return a substring of str from
//                 # headIndex to tailIndex(inclusive)
// result = str.substring(headIndex, tailIndex)

// headChar = str.charAt(headIndex)

// if (countMap.keyExists(headChar)):
//   headCount = countMap.getValueOf(headChar) - 1
// if (headCount == 0):
//   uniqueCounter = uniqueCounter - 1
// countMap.setValueFor(headChar, headCount)

// headIndex = headIndex + 1

// return result