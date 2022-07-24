/* Validate an IP address (IPv4).
An address is valid if and only if it is in the form "X.X.X.X", where each X is a number from 0 to 255.

For example, "12.34.5.6", "0.23.25.0", and "255.255.255.255" are valid IP addresses, while "12.34.56.oops", "1.2.3.4.5", and "123.235.153.425" are invalid IP addresses.

Examples:

ip = '192.168.0.1'
output: true

ip = '0.0.0.0'
output: true

ip = '123.24.59.99'
output: true

ip = '192.168.123.456'
output: false
Constraints:

[time limit] 5000ms
[input] string ip
[output] boolean
*/

console.time('function1');
function validateIP(ip) {
  /**
   @param ip: string
   @return: boolean
  c: 0 >= nums >= 255, only three periods,
  e: check for chars other then int, after parsing (int only),
  */
  // split ip at '.' & store arr
  // if arr.length !== 4, return false
  // parse each elem to nums
  // if each elem typeof !== num, return false
  // if nums not >=0 & <= 255, return false
  // return true
  let ipArray = ip.split('.');
  if (ipArray.length !== 4) return false;
  for (let subNum of ipArray) {
    let segment = parseInt(subNum);
    if (!Number.isInteger(segment) || (0 > segment || 255 < segment)) return false;
  }
  return true
}
console.timeEnd('function1');

// var ip = '192.168.0.1'; // true
// var ip = '0.0.0.0'; // true
// var ip = '123.24.59.99'; // true
// var ip = '192.168.123.456'; // false
// var ip = '1.2.3.4.5'; // false
var ip = "12.34.56.oops"; // false

console.log('🚀 ~ validateIP', validateIP(ip));