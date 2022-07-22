"use strict";
// Given a list of separated words, make every third word uppercase and make the rest of the words lower case

// i: list of separated words
// o: return list of words with every third word in uppercase
// e: empty list
// c: input list in array format? ...args format? string?

function upperCaseThirdWord(listOfWords) {
  // assume input is string
  let input = listOfWords.split(' ');
  for (let i = 2; i < input.length; i += 3) {
    input[i] = input[i].toUpperCase();
  }
  return input.join(' ');
}

console.log(upperCaseThirdWord('this is An Input STRING thing.. random'));

// ----- SOLUTION ----- //

// const makeThirdUpperCase = function (inputString) {
//   let stringArray = inputString.split(' ');

//   for (let i = 0; i < stringArray.length; i++) {
//     if ((i + 1) % 3 === 0 && i !== 0) {
//       stringArray[i] = stringArray[i].toUpperCase();
//     } else {
//       stringArray[i] = stringArray[i].toLowerCase();
//     }
//   }

//   return stringArray.join(' ');
// };

// console.log(makeThirdUpperCase('this is An Input STRING thing.. random'));

