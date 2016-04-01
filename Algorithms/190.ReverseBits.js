/**
 * @param {number} n - a positive integer
 * @return {number} - a positive integer
 */
var reverseBits = function(n) {
    var s = n.toString(2).split('').reverse().join('');
    while (s.length < 32) {
        s += '0';
    }
    return parseInt(s, 2);
};
