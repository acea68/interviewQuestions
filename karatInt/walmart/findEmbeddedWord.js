"use strict";

/*
You are running a classroom and suspect that some of your students are passing around the answers to multiple choice questions disguised as random strings.

Your task is to write a function that, given a list of words and a string, finds and returns the word in the list that is scrambled up inside the string, if any exists. There will be at most one matching word. The letters don't need to be in order or next to each other. The letters cannot be reused.

Example:
words = ['cat', 'baby', 'dog', 'bird', 'car', 'ax']
string1 = 'tcabnihjs'
find_embedded_word(words, string1) -> cat (the letters do not have to be in order)

string2 = 'tbcanihjs'
find_embedded_word(words, string2) -> cat (the letters do not have to be together)

string3 = 'baykkjl'
find_embedded_word(words, string3) -> None / null (the letters cannot be reused)

string4 = 'bbabylkkj'
find_embedded_word(words, string4) -> baby

string5 = 'ccc'
find_embedded_word(words, string5) -> None / null

string6 = 'breadmaking'
find_embedded_word(words, string6) -> bird

All Test Cases:
find_embedded_word(words, string1) -> cat
find_embedded_word(words, string2) -> cat
find_embedded_word(words, string3) -> None / null
find_embedded_word(words, string4) -> baby
find_embedded_word(words, string5) -> None / null
find_embedded_word(words, string6) -> bird

Complexity analysis variables:

W = number of words in `words`
S = maximal length of each word or string
*/


const words = ["cat", "baby", "dog", "bird", "car", "ax"];

const string1 = "tcabnihjs";
const string2 = "tbcanihjs";
const string3 = "baykkjl";
const string4 = "bbabylkkj";
const string5 = "ccc";
const string6 = "breadmaking";

function find_embedded_word(words, string) {
  // i: array of word strings and a string of characters (a 'pool' of characters)
  // o: a word, if exists, from array that is composed of characters in string
  // c: characters from pool can only be used once
  // e: if no words can be comprised of pool of chars, return null

  // turn string into map and keep count of chars
  // iterate thru array of words and do the same
  // if pool map contains matching keys with greater or same count of individual word, return word
  // if none exist, return null
  let stringMap = {};
  for (let i = 0; i < string.length; i++) {
    if (!stringMap[string[i]]) {
      stringMap[string[i]] = 1;
    } else {
      stringMap[string[i]] += 1;
    }
  }
  main:
  for (let word of words) {
    let wordMap = {};
    for (let j = 0; j < word.length; j++) {
      if (!wordMap[word[j]]) {
        wordMap[word[j]] = 1;
      } else {
        wordMap[word[j]] += 1;
      }
    }
    for (let prop in wordMap) {
      if (!stringMap[prop] || stringMap[prop] < wordMap[prop]) {
        continue main;
      }
    }
    return word;
  }
  return null;
}

console.log(find_embedded_word(words, string1));
console.log(find_embedded_word(words, string2));
console.log(find_embedded_word(words, string3));
console.log(find_embedded_word(words, string4));
console.log(find_embedded_word(words, string5));
console.log(find_embedded_word(words, string6));

