function maxValidTime(a, b, c, d) {
  let result = new Array(4).fill(null);
  let inputs = [...arguments];
  inputs.sort((a, b) => b - a);
  let mapMinTens = new Set([0, 1, 2, 3, 4, 5]);
  let mapMinOnes = new Set([0, 1, 2, 3, 4, 5, 6, 7, 8, 9]);
  let mapHrOnes;
  if (result[0] === null && inputs.includes(2)) {
    result[0] = '2';
    let elemToRemoveInd = inputs.indexOf(2);
    inputs.splice(elemToRemoveInd, 1);
    mapHrOnes = new Set([0, 1, 2, 3]);
  } else if (result[0] === null && (inputs.includes(1) || inputs.includes(0))) {
    inputs.includes(1) ? result[0] = '1' : result[0] = '0'
    let elemToRemoveInd = inputs.indexOf(1);
    inputs.splice(elemToRemoveInd, 1);
    mapHrOnes = new Set([0, 1, 2, 3, 4, 5, 6, 7, 8, 9]);
  }
  while (inputs.length) {
    let char = inputs.shift();
    if (result[1] === null && mapHrOnes.has(char)) {
      result[1] = char;
    } else {
      if (result[2] === null && mapMinTens.has(char)) {
        result[2] = char;
      } else if (result[3] === null) {
        result[3] = char;
      } else {
        return 'NOT POSSIBLE'
      }
    }
  }
  result = result.join('')
  return result.slice(0,2) + ':' + result.slice(2);
}

var result, a, b, c, d;
// a = 2;
// b = 6;
// c = 1;
// d = 5; // '15:26'
// a = 9;
// b = 6;
// c = 1;
// d = 9; // 'NOT POSSIBLE'
a = 2;
b = 4;
c = 0;
d = 8; // '20:48'
result = maxValidTime(a, b, c, d);
console.log(result);