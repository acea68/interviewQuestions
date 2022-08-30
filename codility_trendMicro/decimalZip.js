function decimalZip(a, b) {
  // i: two integers
  // o: one integer comprised of alternating digits from a and b (if one runs out, append remainder of other as rest)
  // c: input nums > 0, < 100,000,000 (positives only)
  // e: repeating nums, single nums, single zeros, if c > 100,000,000, return -1

  // make result var (string or arr to join at end)
  // convert a & b to strings
  // while a or b exist
  // append first char of a to result & continue
  // alternate to b & repeat
  // convert result ot int
  // check if > 100m
  // return num or -1
  let result = [];
  a = a.toString().split('');
  b = b.toString().split('');
  while (a.length || b.length) {
    if (a.length && b.length) {
      result.push(a.shift());
      result.push(b.shift());
    } else if (a.length && !b.length) {
      result.push(a.shift());
    } else {
      result.push(b.shift());
    }
  }
  result = parseInt(result.join(''));
  return result > 100000000 ? -1 : result;
}

var result, a, b;
// a = 12;
// b = 56; // 1526
// a = 56;
// b = 12; // 5162
// a = 12345;
// b = 678; // 16273845
// a = 0;
// b = 1234; // 1234
// b = 0;
// a = 1234; // 1234
// a = 123456789;
// b = 123456789; // 1234
result = decimalZip(a, b);
console.log(result);