/* You're creating a game with some amusing mini-games, and you've decided to make a simple variant of the game Mahjong.

In this variant, players have a number of tiles, each marked 0-9. The tiles can be grouped into pairs or triples of the same tile. For example, if a player has "33344466", the player's hand has a triple of 3s, a triple of 4s, and a pair of 6s. Similarly, "55555777" has a triple of 5s, a pair of 5s, and a triple of 7s.

A "complete hand" is defined as a collection of tiles where all the tiles can be grouped into any number of triples (zero or more) and exactly one pair, and each tile is used in exactly one triple or pair.

Write a function that takes a string representation of a collection of tiles in no particular order, and returns true or false depending on whether or not the collection represents a complete hand.

tiles1 = "88844"           # True. Base case - a pair and a triple
tiles2 = "99"              # True. Just a pair is enough.
tiles3 = "55555"           # True. The triple and a pair can be of the same tile value
tiles4 = "22333333"        # True. A pair and two triples
tiles5 = "73797439949499477339977777997394947947477993"
                            # True. 4 has a triple and a pair, other numbers have just triples
tiles6 = "111333555"       # False. There are three triples, 111 333 555 but no pair
tiles7 = "42"              # False. Two singles not forming a pair
tiles8 = "888"             # False. A triple, no pair
tiles9 = "100100000"       # False. A pair of 1 and two triples of 0, a left over 0
tiles10 = "346664366"      # False. Three pairs and a triple
tiles11 = "8999998999899"  # False. A triple of 8, three triples of 9, a leftover 9
tiles12 = "17610177"       # False. Triples of 1, and 7, left over 6 and 1
tiles13 = "600061166"      # False. A pair of 1, triple of 0, triple of 6, 0 and 6 leftover
tiles14 = "6996999"        # False. A pair of 6, a triple of 9 and another pair of 9
tiles15 = "03799449"       # False. A pair of 4, triple of 9 and 0, 3, and 7 left over
tiles16 = "64444333355556" # False. A pair of 6, two pairs each of 3, 4, 5

complete(tiles1) => True
complete(tiles2) => True
complete(tiles3) => True
complete(tiles4) => True
complete(tiles5) => True
complete(tiles6) => False
complete(tiles7) => False
complete(tiles8) => False
complete(tiles9) => False
complete(tiles10) => False
complete(tiles11) => False
complete(tiles12) => False
complete(tiles13) => False
complete(tiles14) => False
complete(tiles15) => False
complete(tiles16) => False

Complexity Variable
N - Number of tiles in the input string */



"use strict";

const tiles1 = "88844";
const tiles2 = "99";
const tiles3 = "55555";
const tiles4 = "22333333";
const tiles5 = "73797439949499477339977777997394947947477993";
const tiles6 = "111333555";
const tiles7 = "42";
const tiles8 = "888";
const tiles9 = "100100000";
const tiles10 = "346664366";
const tiles11 = "8999998999899";
const tiles12 = "17610177";
const tiles13 = "600061166";
const tiles14 = "6996999";
const tiles15 = "03799449";
const tiles16 = "64444333355556";

// create map from input string with corresponding # of encounter counts { '7' : 11, }
// create onlyPair variable (represents 'pairs' encountered in my map. if > 1, return false)
// iterate thru map properties (k-v pairs)
// if the count < 2, return false
// if # of times encountered === 2, (and first pair encountered) continue iteration, also, toggle onlyPair to true; { '0': 3, '1': 4, '3' : 4,...'8': 2 }
// check for pairs (num % 2 === 0 && num > 2) return false
// check if 'encountered' % 3 === 0
// if any value is not divisible by 3 || 2, return false
// return true if onlyPair flag is true

function isCompleteHand(tiles) {
  let map = {};
  for (let i of tiles) {
    if (!map[tiles[i]]) {
      map[tiles[i]] = 1;
    } else {
      map[tiles[i]]++;
    }
  }
  let onlyPair = 0;
  for (let tile in map) {
    if (map[tile] % 3 !== 0) { // guard: if cannot be grouped by triples
      if (map[tile] % 3 === 2) { // guard: can be grouped by pairs
        onlyPair++;
      } else { // remainder is one, canont group in pair or triple
        return false;
      }
    }
  }
  return onlyPair === 1;
}

var result;
result = isCompleteHand(tiles1);
console.log('result1: ', result)
result = isCompleteHand(tiles2);
console.log('result2: ', result)
result = isCompleteHand(tiles3);
console.log('result3: ', result)
result = isCompleteHand(tiles4);
console.log('result4: ', result)
result = isCompleteHand(tiles5);
console.log('result5: ', result)
result = isCompleteHand(tiles6);
console.log('result6: ', result)
result = isCompleteHand(tiles7);
console.log('result7: ', result)
result = isCompleteHand(tiles8);
console.log('result8: ', result)
result = isCompleteHand(tiles9);
console.log('result9: ', result)
result = isCompleteHand(tiles10);
console.log('result10: ', result)
result = isCompleteHand(tiles11);
console.log('result11: ', result)
result = isCompleteHand(tiles12);
console.log('result12: ', result)
result = isCompleteHand(tiles13);
console.log('result13: ', result)
result = isCompleteHand(tiles14);
console.log('result14: ', result)
result = isCompleteHand(tiles15);
console.log('result15: ', result)
result = isCompleteHand(tiles16);
console.log('result16: ', result)
