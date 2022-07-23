/* We have some clickstream data that we gathered on our client's website. Using cookies, we collected snippets of users' anonymized URL histories while they browsed the site. The histories are in chronological order, and no URL was visited more than once per person.

Write a function that takes two users' browsing histories as input and returns the longest contiguous sequence of URLs that appears in both.

Sample input:

user0 = ["/start", "/green", "/blue", "/pink", "/register", "/orange", "/one/two"]
user1 = ["/start", "/pink", "/register", "/orange", "/red", "a"]
user2 = ["a", "/one", "/two"]
user3 = ["/pink", "/orange", "/yellow", "/plum", "/blue", "/tan", "/red", "/amber", "/HotRodPink", "/CornflowerBlue", "/LightGoldenRodYellow", "/BritishRacingGreen"]
user4 = ["/pink", "/orange", "/amber", "/BritishRacingGreen", "/plum", "/blue", "/tan", "/red", "/lavender", "/HotRodPink", "/CornflowerBlue", "/LightGoldenRodYellow"]
user5 = ["a"]
user6 = ["/pink","/orange","/six","/plum","/seven","/tan","/red", "/amber"]

Sample output:

var result = findContiguousHistory(user0, user1) => ["/pink", "/register", "/orange"]
var result = findContiguousHistory(user0, user2) => [] (empty)
var result = findContiguousHistory(user0, user0) => ["/start", "/green", "/blue", "/pink", "/register", "/orange", "/one/two"]
var result = findContiguousHistory(user2, user1) => ["a"]
var result = findContiguousHistory(user5, user2) => ["a"]
var result = findContiguousHistory(user3, user4) => ["/plum", "/blue", "/tan", "/red"]
var result = findContiguousHistory(user4, user3) => ["/plum", "/blue", "/tan", "/red"]
var result = findContiguousHistory(user3, user6) => ["/tan", "/red", "/amber"]

n: length of the first user's browsing history
m: length of the second user's browsing history */

function findContiguousHistory(u1, u2) {
  // i: two arrays of strings representing browser histories
  // o: one array of strings representing matching continuous elements found in both input arrays
  // c: no limits on characters used
  // e: empty strings, both arrays the same

  // make pointers at indexes:
  // l1: u1 array. starts at main iteration of 1st user
  // r1: continues right boundary of first arr while matching with u2
  // 12: left pointer of u2
  // r2: right pointer to advance while matching with u1
  // create matching []
  // create matchingCandidate []
  // iterate thru first input arr, all pointers reset
  // iterate thru 2nd arr with left2 & r2
  // hold 2nd iteration and start moving pointers using nested while loop (r1 & r2)
  // when first elem matches, push elem (& all subsequest mathcing elems) into matchingCandidate
  // compare matchingCandidate with existing matching: if new mC.length > m, replace
  // return matching
  if (u1 == u2) return u1
  let r1, r2;
  let matching = [];
  let matchingCandidate = [];
  for (let i = 0; i < u1.length; i++) {
    r1 = i;
    for (let j = 0; j < u2.length; j++) {
      r2 = j;
      while (u1[r1] === u2[r2]) {
        matchingCandidate.push(u2[r2])
        r1 += 1;
        r2 += 1;
      }
      if (matchingCandidate.length > matching.length) {
        matching = matchingCandidate.slice();
        matchingCandidate = [];
        r1 = i;
      }
    }
    r2 = 0;
    matchingCandidate = [];
  }
  return matching
}


user0 = ["/start", "/green", "/blue", "/pink", "/register", "/orange", "/one/two"]
user1 = ["/start", "/pink", "/register", "/orange", "/red", "a"]
user2 = ["a", "/one", "/two"]
user3 = ["/pink", "/orange", "/yellow", "/plum", "/blue", "/tan", "/red", "/amber", "/HotRodPink", "/CornflowerBlue", "/LightGoldenRodYellow", "/BritishRacingGreen"]
user4 = ["/pink", "/orange", "/amber", "/BritishRacingGreen", "/plum", "/blue", "/tan", "/red", "/lavender", "/HotRodPink", "/CornflowerBlue", "/LightGoldenRodYellow"]
user5 = ["a"]
user6 = ["/pink","/orange","/six","/plum","/seven","/tan","/red", "/amber"]

// var result = findContiguousHistory(user0, user1); // => ["/pink", "/register", "/orange"]
// var result = findContiguousHistory(user0, user2); // => [] (empty)
// var result = findContiguousHistory(user0, user0); // => ["/start", "/green", "/blue", "/pink", "/register", "/orange", "/one/two"]
// var result = findContiguousHistory(user2, user1); // => ["a"]
// var result = findContiguousHistory(user5, user2); // => ["a"]
// var result = findContiguousHistory(user3, user4); // => ["/plum", "/blue", "/tan", "/red"]
// var result = findContiguousHistory(user4, user3); // => ["/plum", "/blue", "/tan", "/red"]
var result = findContiguousHistory(user3, user6); // => ["/tan", "/red", "/amber"]
console.log('🚀 ~ result', result);

